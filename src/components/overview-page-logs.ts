import blessed, { Widgets } from 'blessed'
import { pluck } from 'ramda'
import { Screen } from '../core'
import { UIComponentTrait } from './types'
import { selectModuleLinkLogs, watchStateValue } from '../state'

export class OverviewPageLog implements UIComponentTrait<Widgets.ListElement> {
  private list: Widgets.ListElement
  constructor (screen: Screen, parent?: Widgets.Node) {
    this.list = blessed.list({
      parent,
      fg: 'green',
      width: '100%',
      height: 40,
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
        this.list.setItems(pluck('message', nextLogs))
        screen.render()
      })
    })
  }
  render () {
    this.list.render()
    return this.list
  }
}
