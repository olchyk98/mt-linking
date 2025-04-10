import path from 'path'
import process from 'process'
import PQueue from 'p-queue'
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
import { error } from '../../lifecycle'
import { logAsLinker } from '../../log'
import { errorRenderers } from '../../../errors'

// TODO: Make link work with yarn and pnpm workspaces (link every single package in the workspace)
// TODO: Figure out how to handle the case with multiple links at the same time in node_modules?
// TODO: Introduce ASCII art
// TODO: Introduce git readme with excalidraw and make it public
// TODO: Create a landing page explaining how to use the CLI
// TODO: Ship bundle to npm

const transpilationQueue = new PQueue({ concurrency: 1 })

program
  .description('Link one package to another package')
  .argument('[package]', 'Name of package to propagate changes from')
  .option('-d, --dest [string]')
  .option('--livereload', 're-link automatically on every file change')
  .action(async (from, _flags) => {
    const { dest: _dest = process.cwd(), livereload = false } =
      _flags as { dest: string, livereload?: boolean }
    // FIXME: Utilize parseArg from commander, since "--dest" with
    // no arg will produce a boolean.
    const dest = typeof _dest === 'string' ? _dest : process.cwd()

    if (livereload === true) {
      logAsLinker('👓 Running in Livereload mode.')
    }

    const absolutePath = path.isAbsolute(dest)
      ? dest
      : path.resolve(__dirname, dest)
    const destinationPackage = getPackageAtPath(absolutePath)
    if (destinationPackage == null) {
      error(errorRenderers.INSUFFICIENT_INFO_IN_DEST_PACKAGE_JSON())
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
      logAsLinker(`⚓ Linking "${sourcePackage.packageJson.name}" to "${destinationPackage.packageJson.name}"`)
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
            logAsLinker(`Change triggered - ${filename}! OLink is going to re-run once current linking pipeline has been completed`)
            // XXX: Let's clear all waiting tasks in queue, since they
            // are now outdated. Once current pipeline has finished, let's
            // process newest change.
            transpilationQueue.clear()
          }
          transpilationQueue.add(
            () => (
              new Promise(async (res) => {
                logAsLinker('A change has been detected! Time to OLink 👷')
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
    }
  })
