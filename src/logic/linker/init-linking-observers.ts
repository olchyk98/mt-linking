import { isNil } from 'ramda'
import { moduleLinksSlice, selectModuleLink, subscribeToStateAction } from '../../state'
import { logForLinker } from '../log-for-linker'
import { Linker } from './linker'

export function initLinkingObservers (): void {
  const linksMap: Record<string, Linker> = {}

  subscribeToStateAction(moduleLinksSlice.actions.fulfillModuleLink, async (action, state) => {
    const link = selectModuleLink(action.payload.from)(state)
    if (isNil(link) || link.from in linksMap) return

    logForLinker(link.from, 'Initializing linking')
    const linker = new Linker(link)
    linksMap[link.from] = linker
    await linker.start()
  })

  subscribeToStateAction(moduleLinksSlice.actions.setModuleLinkStatus, (action, state) => {
    const link = selectModuleLink(action.payload.from)(state)
    if (isNil(link) || !(link.from in linksMap)) return

    const linker = linksMap[link.from]

    switch (link.status?.status) {
      case 'OK': return linker.start()
      case 'DEAD': return linker.stop()
      case 'FAILED': return linker.stop()
      default: break
    }
  })
}
