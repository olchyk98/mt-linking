import { any } from 'ramda'
import { ModuleLink, getWithState } from '../../state'
import { applyTranspilationResultForLink } from './apply-transpilation-results-for-link'
import { getLinkingStrategyForPackage } from './get-linking-strategy-for-package'
import { ObserveChangesForPackageUnsubscribeFn, observeChangesForPackage } from './observe-changes-for-package'
import { transpilePackage } from './transpile-package'
import { setModuleLinkStatus } from '../set-module-link-status'
import { logForLinker } from '../log-for-linker'
import { LinkingStrategy } from './types'

export class Linker {
  private link: ModuleLink
  private unsubscribeFromWatcher: ObserveChangesForPackageUnsubscribeFn | null
  public key: string
  constructor (link: ModuleLink) {
    this.link = link
    this.key = link.from + link.to + Math.random()
    this.unsubscribeFromWatcher = null
  }
  private async getLinkingStrategy (): Promise<LinkingStrategy | null> {
    logForLinker(this.link.from, 'Choosing linking strategy')
    const linkingStrategy = await getLinkingStrategyForPackage(this.link.from)
    if (!linkingStrategy) {
      stop()
      const errorMessage = 'Could not find optimal linking strategy. Aborting.'
      logForLinker(this.link.from, errorMessage, 'ERROR')
      setModuleLinkStatus(errorMessage, 'FAILED')
      this.unsubscribeFromWatcher?.()
      return null
    }
    return linkingStrategy
  }
  public get running () {
    return getWithState((state) => {
      const { links } = state.moduleLinks
      return any((l) => l.from === this.link.from && l.status?.status === 'OK', links)
    })
  }
  public async start () {
    logForLinker(this.link.from, 'Linking')
    const linkingStrategy = await this.getLinkingStrategy()
    if (!linkingStrategy) return
    logForLinker(this.link.from, `Selected strategy: "${linkingStrategy}"`)
    logForLinker(this.link.from, 'Waiting for changes...')
    this.unsubscribeFromWatcher = observeChangesForPackage(this.link.from, async (changedPath, changedIndex) => {
      try {
        logForLinker(this.link.from, `(${changedIndex + 1}) Detected change in source file "${changedPath}"`)
        await transpilePackage(this.link.from, linkingStrategy)
        await applyTranspilationResultForLink(this.link, linkingStrategy)
        logForLinker(this.link.from, 'Changes applied', 'SUCCESS')
      } catch (e_) {
        const error = e_ as Error
        logForLinker(this.link.from, error.message, 'ERROR')
      }
    })
  }
  public stop () {
    logForLinker(this.link.from, 'Pausing linking')
    this.unsubscribeFromWatcher?.()
  }
}
