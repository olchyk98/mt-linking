import { head } from 'ramda'
import { watchStateValue } from '../../state'
import { logForLinker } from '../log-for-linker'
import { Linker } from './linker'

export function initLinkingObservers (): void {
  let _test_inited = false
  watchStateValue((state) => state.moduleLinks.links, async (_, __, links) => {
    // TODO: Make this work with multiple, curently only testing.

    if (_test_inited) return
    const link = head(links)
    if (!link) return

    _test_inited = true

    logForLinker(link.from, 'Initializing linking')
    const linker = new Linker(link)
    await linker.start()
  })
}
