import { difference, keys, pluck } from 'ramda'
import { moduleLinksSlice, subscribeToStateAction, watchStateValue } from '../../state'
import { logForLinker } from '../log-for-linker'
import { Linker } from './linker'

export function initLinkingObservers (): void {
  const linksMap: Record<string, Linker> = {}

  subscribeToStateAction(moduleLinksSlice.actions.fulfillModuleLink, () => {
    logForLinker(link.from, 'Initializing linking')
    const linker = new Linker(link)
    await linker.start()
    // TODO: Add
  })

  // TODO: CONTINUE HERE ->
  subscribeToStateAction(moduleLinksSlice.actions.setModuleLinkStatus, () => {

  })
}
