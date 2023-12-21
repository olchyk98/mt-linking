import { Widgets } from 'blessed'
import { difference } from 'ramda'
import blessedcontrib, { Widgets as BlessedWidgets } from 'blessed-contrib'
import { Screen } from '../core'
import { UIComponentTrait } from './types'
import { selectModuleLinkLogs, watchStateValue } from '../state'

export class OverviewPageLog implements UIComponentTrait<BlessedWidgets.LogElement> {
  private log: BlessedWidgets.LogElement
  constructor (screen: Screen, parent?: Widgets.Node) {
    this.log = blessedcontrib.log({
      parent,
      fg: 'green',
      width: '100%',
      height: '100%-3',
      label: ' Logs ',
      border: { type: 'line' },
    })

    // TODO: Support multiple (this is a test solution)
    let inited = false
    watchStateValue((state) => state.moduleLinks.links, (_, __, newLinks) => {
      if (!newLinks.length) return
      if (inited) return
      inited = true
      watchStateValue(selectModuleLinkLogs(newLinks[0].from), (_, prevLogs, nextLogs) => {
        if (!nextLogs) return
        if (!prevLogs) {
          nextLogs.forEach((log) => this.log.log(log.message))
          return
        }
        const diff = difference(nextLogs, prevLogs)
        diff.forEach((log) => this.log.log(log.message))
      })
    })
  }
  render () {
    this.log.render()
    return this.log
  }
}
