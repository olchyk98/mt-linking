import { any } from 'ramda'
import { ModuleLink, getWithState } from '../../state'
import { applyTranspilationResultForLink } from './apply-transpilation-results-for-link'
import { getLinkingStrategyForPackage } from './get-linking-strategy-for-package'
import { ObserveChangesForPackageUnsubscribeFn, observeChangesForPackage } from './observe-changes-for-package'
import { transpilePackage } from './transpile-package'
import { logForLinker } from './log-for-linker'

// TODO: Log on each instruction to output stuff from linker: create "logFromLinker(linkerKey, message)"
// to push to redux store
export function createLinker (link: ModuleLink): Linker {
  const linkerKey = link.from + link.to + Math.random()
  let unsubscribeFromWatcher: ObserveChangesForPackageUnsubscribeFn | null = null
  const stop = () => {
    logForLinker(link.from, 'Pausing linking')
    unsubscribeFromWatcher?.()
  }
  return {
    key: linkerKey,
    get running () {
      return getWithState((state) => (
        any((l) => l.from === link.from && l.status?.status === 'OK', state.moduleLinks.links)
      ))
    },
    async start () {
      const linkingStrategy = await getLinkingStrategyForPackage(link.from)
      if (!linkingStrategy) {
        stop()
        logForLinker(link.from, 'Could not find optimal linking strategy. Aborting.')
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
