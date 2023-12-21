import { ModuleLink } from '../../state'
import { applyTranspilationResultForLink } from './apply-transpilation-results-for-link'
import { getLinkingStrategyForPackage } from './get-linking-strategy-for-package'
import { ObserveChangesForPackageUnsubscribeFn, observeChangesForPackage } from './observe-changes-for-package'
import { transpilePackage } from './transpile-package'

// TODO: Log on each instruction to output stuff from linker: create "logFromLinker(linkerKey, message)"
// to push to redux store
export function createLinker (link: ModuleLink): Linker {
  const linkerKey = link.from + link.to + Math.random()
  let running = false
  let unsubscribeFromWatcher: ObserveChangesForPackageUnsubscribeFn | null = null
  const stop = () => {
    unsubscribeFromWatcher?.()
    running = false
  }
  return {
    key: linkerKey,
    get running () { return running },
    async start () {
      running = true
      const linkingStrategy = await getLinkingStrategyForPackage(link.from)
      if (!linkingStrategy) {
        stop()
        // TODO: Log
        return
      }
      unsubscribeFromWatcher = observeChangesForPackage(link.from, async (_path, _changedIndex) => {
        transpilePackage(link.from, linkingStrategy)
        applyTranspilationResultForLink(link, linkingStrategy)
      })
    },
    stop,
  }
}

export interface Linker {
  key: string
  running: boolean
  start(): Promise<void>
  stop(): void
}
