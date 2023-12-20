import { ModuleLink } from '../../state'
import { getLinkingStrategyForPackage } from './get-linking-strategy-for-package'
import { ObserveChangesForPackageUnsubscribeFn, observeChangesForPackage } from './observe-changes-for-package'

// TODO: Log on each instruction to output stuff from linker: create "logFromLinker(linkerKey, message)"
// to push to redux store
export function createLinker (link: ModuleLink): Linker {
  const linkerKey = link.from + link.to + Math.random()
  let running = false
  let unsubscribeFromWatcher: ObserveChangesForPackageUnsubscribeFn | null = null
  return {
    key: linkerKey,
    get running () {
      return running
    },
    async start () {
      running = true
      const transpileStrategy = await getLinkingStrategyForPackage(link.from)
      unsubscribeFromWatcher = observeChangesForPackage(link.from, async (_path, _changedIndex) => {
        transpilePackage(link.from, transpileStrategy)
        applyTranspilationResultForLink(link, transpileStrategy)
      })
    },
    stop () {
      unsubscribeFromWatcher?.()
      running = false
    },
  }
}

export interface Linker {
  key: string
  running: boolean
  start(): Promise<void>
  stop(): void
}
