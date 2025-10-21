import PQueue from 'p-queue'
import path from 'path'
import fs from 'fs'
import { observeChangesMinDebounceMs } from '../../constants'
import { errorRenderers } from '../../errors'
import { error, log, logAsLinker, observeFolderChanges } from '../../utils'
import chalk from 'chalk'
import { getLinkablePackagesForPackage, getLinkingStrategyForPackage, getPackageAtPath } from '../../core'
import { promptPackageToLink } from '../../ui'
import { transpileAndApplyPackage } from './transpile-and-apply-package'

const transpilationQueue = new PQueue({ concurrency: 1 })

export async function commandLinkHandler (
  from?: string | null,
  flags: CommandLinkHandlerOpts = {},
): Promise<void> {

  const {
    dest: _dest = process.cwd(),
    livereload = false,
    reprompt = false,
    debounce: debounceMs = observeChangesMinDebounceMs,
  } = flags
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
        : linkablePackages.find((l) => l.packageJson.name === from)
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
      { debounceMs: Math.max(observeChangesMinDebounceMs, debounceMs) },
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
    return commandLinkHandler(null, flags)
  }

  await transpilationQueue.onIdle()
}

export interface CommandLinkHandlerOpts {
  dest?: string,
  livereload?: boolean
  reprompt?: boolean
  debounce?: number
}
