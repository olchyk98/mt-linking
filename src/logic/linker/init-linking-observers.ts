import { difference, forEach, keys, pluck} from 'ramda'
import { watchStateValue } from '../../state'
import { logForLinker } from '../log-for-linker'
import { Linker } from './linker'

export function initLinkingObservers (): void {
  const linksMap: Record<string, Linker> = {}
  watchStateValue((state) => state.moduleLinks.links, async (_, __, currentLinks) => {
    const existingFrom = keys(linksMap)
    const currentFrom = pluck('from', currentLinks)

    // TODO: Implement a solution that would work with pausing/resuming.
    // Probably converted to a global variable class (that can be controlled from anywhere).

    const removed = difference(existingFrom, currentFrom)
    const added = difference(currentFrom, currentFrom)

    // TODO: CONTINUE HERE -> 00

    removed.forEach((from) => delete linksMap[from])
    added.forEach((from) => {
      const linker = new Linker(from)
      linksMap[from]
    })

    logForLinker(link.from, 'Initializing linking')
    const linker = new Linker(link)
    await linker.start()
  })
}
