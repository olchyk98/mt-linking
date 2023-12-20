import { Widgets } from 'blessed'
import blessedcontrib, { Widgets as BlessedWidgets } from 'blessed-contrib'
import { Screen } from '../core'
import { UIComponentTrait } from './types'

export class OverviewPageLog implements UIComponentTrait<BlessedWidgets.LogElement> {
  private log: BlessedWidgets.LogElement
  constructor (screen: Screen, parent?: Widgets.Node) {
    this.log = blessedcontrib.log({
      parent,
      fg: 'green',
      width: '100%',
      height: 30,
      label: ' Logs ',
      border: { type: 'line' },
    })
  }
  render () {
    this.log.render()
    return this.log
  }
}
