import { head } from 'ramda'
import { watchStateValue } from '../../state'
import { createLinker } from './create-linker'

export function initLinkingObservers (): void {
  let _test_inited = false
  watchStateValue((state) => state.moduleLinks.links, (_, __, links) => {
    // TODO: Make this work with multiple, curently only testing.

    if (_test_inited) return
    const link = head(links)
    if (!link) return

    _test_inited = true

    const linker = createLinker(link)
    linker.start()

    setInterval(() => {
      linker.stop()
    }, 5000)

    // 1. Listen to changes in the package (npm package "chokidar")
    // 2. Transpile with optimal strategy
    // 3. Copy over to the node_modules
    // (POTENTIAL) 4. Wait a few seconds and copy
    // over to node_modules again. (this is done to ensure that webapp reloads after the new changes are pasted -- works as a dirty fix)
  })
}
