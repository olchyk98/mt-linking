import path from 'path'
import { Args, Command, Flags } from '@oclif/core'
import PQueue from 'p-queue'
import { find } from 'ramda'
import {
  applyTranspilationResult,
  createLogLinker,
  getLinkablePackagesForPackage,
  getLinkingStrategyForPackage,
  getPackageAtPath,
  transpilePackage
} from '../core'
import { observeFolderChanges } from '../utils'
import { promptPackageToLink } from '../ui'

// TODO: Split up this code into smaller modules
// TODO: If flags and args are not specified, you can use inquirer in runtime to obtain the values

const transpilationQueue = new PQueue({ concurrency: 1 })

export default class Link extends Command {
  static override description = 'Link one package to another package'

  static override flags = {
    livereload: Flags.boolean({
      char: 'l',
      description: 'When specified, the program will observe new changes and propagate them in live mode'
    }),
    dest: Flags.string({
      char: 'd',
      description: 'Instead of using the current folder, this flag may be used to override which folder the program should treat as destination package',
    })
  }

  static args = {
    from: Args.string({
      char: 't',
      description: 'Name of package to propagate changes from',
    })
  }

  public async run(): Promise<void> {
    const logAsLinker = createLogLinker.call(this)

    const { args, flags } = await this.parse(Link)
    const { dest = './', livereload } = flags

    const absolutePath = path.isAbsolute(dest)
      ? dest : path.resolve(__dirname, dest)
    const destinationPackage = getPackageAtPath(absolutePath)
    if (destinationPackage == null) {
      this.error('INSUFFICIENT_INFO_IN_DEST_PACKAGE_JSON')
    }
    const linkablePackages = getLinkablePackagesForPackage(destinationPackage)
    const sourcePackage = args.from == null
      ? await promptPackageToLink(linkablePackages)
      : find((l) => l.packageJson.name === args.from, linkablePackages)
    if (sourcePackage == null) {
      this.error('SPECIFIED_FROM_PACKAGE_IS_NOT_LINKABLE')
    }
    const linkingStrategy = getLinkingStrategyForPackage(sourcePackage)
    if (linkingStrategy == null) {
      this.error('NO_LINKING_STRATEGY_AVAILABLE_FOR_SOURCE')
    }
    logAsLinker(`Established linking strategy: "${linkingStrategy}"`)

    const unsubscribe = observeFolderChanges(
      sourcePackage.absolutePath,
      { debounceMs: 100 },
      (filename) => {
        if (transpilationQueue.pending > 0) {
          // XXX: If we're already running one item through the queue,
          // and we don't support more than one items (no livereload mode, single use program),
          // then we block queuing of all future linking requests.
          if (!livereload) return
          logAsLinker(`[QUEUED] Change triggered! - ${filename}`)
        }
        transpilationQueue.add(() => (
          new Promise((res) => {
            logAsLinker(`Processing change in file ${filename}`)
            const transpilationStream = transpilePackage(sourcePackage, linkingStrategy)
            if (transpilationStream == null) {
              this.error('WEIRD_CASE_1')
            }
            transpilationStream.on('data', (log: string) => {
              this.log(log)
            })
            transpilationStream.on('error', (error) => {
              this.error(`Errored: ${error}`)
            })
            transpilationStream.on('end', () => {
              logAsLinker('Applying transpilation result...')
              try {
                applyTranspilationResult(sourcePackage, destinationPackage, linkingStrategy)
                logAsLinker('Success!')
                res(void 0)
              } catch (e) {
                if (e instanceof Error) {
                  this.error(e)
                } else {
                  this.error('Unexpected error occurred.')
                }
              } finally {
                // XXX: Exiting the application if we are running
                // in single-use mode. 
                if (!livereload) {
                  transpilationQueue.clear()
                  unsubscribe()
                }
              }
            })
          })
        ))
      }
    )
  }
}
