import path from 'path'
import process from 'process'
import PQueue from 'p-queue'
import fs from 'fs'
import { find } from 'ramda'
import {
  getLinkablePackagesForPackage,
  getLinkingStrategyForPackage,
  getPackageAtPath,
} from '../../../core'
import { observeFolderChanges } from '../../../utils'
import { promptPackageToLink } from '../../../ui'
import { transpileAndApplyPackage } from './transpile-and-apply-package'
import { program } from '../../program'
import { error, log } from '../../lifecycle'
import { logAsLinker } from '../../log'
import { errorRenderers } from '../../../errors'
import chalk from 'chalk'
import { LINKS_LOCATION } from '../../../constants'

// TODO: Introduce "--debounce" => to prevent running transpile too many times, user can specify any debounce in ms.
// TODO: Sentry integration
// TODO: Remove ramda
// TODO: Write tests with memfs
// TODO: Determine whether to use pnpm or yarn based on corepack settings (putting on hold, since this is a non issue)

const transpilationQueue = new PQueue({ concurrency: 1 })

async function handler (from: string | null, flags: Flags): Promise<void> {
  const { dest: _dest = process.cwd(), livereload = false, reprompt = false } = flags
  // FIXME: Utilize parseArg from commander, since "--dest" with
  // no arg will produce a boolean.
  const dest = typeof _dest === 'string' ? _dest : process.cwd()

  log(chalk.bgBlack.white(`
 ▒█████   ██▓ ███▄    █  ██ ▄█▀
▒██▒  ██▒▓██▒ ██ ▀█   █  ██▄█▒ 
▒██░  ██▒▒██▒▓██  ▀█ ██▒▓███▄░ 
▒██   ██░░██░▓██▒  ▐▌██▒▓██ █▄ 
░ ████▓▒░░██░▒██░   ▓██░▒██▒ █▄
░ ▒░▒░▒░ ░▓  ░ ▒░   ▒ ▒ ▒ ▒▒ ▓▒
  ░ ▒ ▒░  ▒ ░░ ░░   ░ ▒░░ ░▒ ▒░
░ ░ ░ ▒   ▒ ░   ░   ░ ░ ░ ░░ ░ 
    ░ ░   ░           ░ ░  ░   
    `))

  // XXX: Checkin Oink .config folder exists, because otherwise
  // running oink right away doesn't any sense, since there's
  // nothing that can be linked. Since there are no known packages.
  if (!fs.existsSync(LINKS_LOCATION)) {
    error(errorRenderers.NO_LINKABLE_PACKAGES_SETUP())
  }

  if (livereload === true) {
    logAsLinker('👓 Running in Livereload mode.')
  } else if (reprompt === true) {
    logAsLinker('🔂Oink will restart after linking job is done, because --reprompt flag has been specified.')
  }

  const absolutePath = path.isAbsolute(dest)
    ? dest
    : path.resolve(__dirname, dest)
  const destinationPackage = getPackageAtPath(absolutePath)
  if (destinationPackage == null) {
    error(errorRenderers.INSUFFICIENT_INFO_IN_DEST_PACKAGE_JSON())
  }

  if (!fs.existsSync(path.resolve(absolutePath, 'node_modules'))) {
    error(errorRenderers.PACKAGE_IS_NOT_INSTALLED())
  }

  const linkablePackages = getLinkablePackagesForPackage(destinationPackage)
  if (linkablePackages.length <= 0) {
    error(errorRenderers.NO_LINKABLE_PACKAGES_FOR_DEST())
  }
  const sourcePackage =
      from == null
        ? await promptPackageToLink(linkablePackages)
        : find((l) => l.packageJson.name === from, linkablePackages)
  if (sourcePackage == null) {
    error(errorRenderers.SPECIFIED_SOURCE_PACKAGE_IS_NOT_LINKABLE())
  }

  const linkingStrategy = getLinkingStrategyForPackage(sourcePackage)
  if (linkingStrategy == null) {
    error(errorRenderers.NO_LINKING_STRATEGY_AVAILABLE_FOR_SOURCE())
  }
  logAsLinker(`🔗 Established linking strategy: "${linkingStrategy}"`)

  // XXX: Upon command execution, initial linking has to be
  // performed. Let's queue it.
  transpilationQueue.add(async () => {
    logAsLinker(`⚓OINKing "${sourcePackage.packageJson.name}" to "${destinationPackage.packageJson.name}"`)
    await transpileAndApplyPackage(sourcePackage, destinationPackage, linkingStrategy)
  })

  // XXX: Spinning up a files watcher and running re-linking
  // on every change in the source package folder - livereload mode.
  if (livereload === true) {
    observeFolderChanges(
      sourcePackage.absolutePath,
      { debounceMs: 100 },
      (filename) => {
        if (transpilationQueue.pending > 0) {
          // XXX: If we're already running one item through the queue,
          // and we don't support more than one items (no livereload mode, single use program),
          // then we block queuing of all future linking requests.
          if (!livereload) return
          logAsLinker(`Change triggered - ${filename}! Oink is going to re-run once current linking pipeline has been completed`)
          // XXX: Let's clear all waiting tasks in queue, since they
          // are now outdated. Once current pipeline has finished, let's
          // process newest change.
          transpilationQueue.clear()
        }
        transpilationQueue.add(
          () => (
            new Promise(async (res) => {
              logAsLinker('A change has been detected! Time to Oink 👷')
              try {
                await transpileAndApplyPackage(sourcePackage, destinationPackage, linkingStrategy)
                res(void 0)
              } catch (e) {
                if (e instanceof Error) {
                  error(e)
                } else {
                  error(errorRenderers.FATAL_UNEXPECTED_ERROR())
                }
              }
            })
          ),
        )
      },
    )
  } else if (reprompt === true) {
    await transpilationQueue.onIdle()
    // XXX: When not in livereload mode, reprompt flag will trigger
    // Oink to rerun from scratch after linking job is done. This allows
    // to simplify the experience where different packages have to be linked
    // one after another.
    return handler(from, flags)
  }
}

program
  .description('Link one package to another package')
  .argument('[package]', 'Name of package to propagate changes from')
  .option('-d, --dest [string]')
  .option('--livereload', 're-link automatically on every file change')
  .option('--reprompt', 'restart oink after linking job has completed')
  .action(handler)

interface Flags {
  dest: string,
  livereload?: boolean
  reprompt?: boolean
}
