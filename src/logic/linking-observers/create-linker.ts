import { any } from 'ramda'
import { ModuleLink, getWithState } from '../../state'
import { applyTranspilationResultForLink } from './apply-transpilation-results-for-link'
import { getLinkingStrategyForPackage } from './get-linking-strategy-for-package'
import { ObserveChangesForPackageUnsubscribeFn, observeChangesForPackage } from './observe-changes-for-package'
import { transpilePackage } from './transpile-package'
import { setModuleLinkStatus } from '../set-module-link-status'
import { logForLinker } from '../log-for-linker'

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
      logForLinker(link.from, 'Linking')
      logForLinker(link.from, 'Choosing linking strategy')
      const linkingStrategy = await getLinkingStrategyForPackage(link.from)
      if (!linkingStrategy) {
        stop()
        const errorMessage = 'Could not find optimal linking strategy. Aborting.'
        logForLinker(link.from, errorMessage, 'ERROR')
        setModuleLinkStatus(errorMessage, 'FAILED')
        return
      }
      logForLinker(link.from, `Selected strategy: "${linkingStrategy}"`)
      unsubscribeFromWatcher = observeChangesForPackage(link.from, async (changedPath, changedIndex) => {
        logForLinker(link.from, `(${changedIndex}) Detected change in source file "${changedPath}"`)
        const transpilationError = await transpilePackage(link.from, linkingStrategy)
        if (transpilationError) return
        logForLinker(link.from, 'Transpiled. Applying changes...', 'SUCCESS')
        const applyResultError = await applyTranspilationResultForLink(link, linkingStrategy)
        if (applyResultError) return
        logForLinker(link.from, 'Changes applied', 'SUCCESS')
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
