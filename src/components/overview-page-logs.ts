import { pluck } from 'ramda'
import fs from 'fs'
import blessed, { Widgets } from 'blessed'
import { UIComponentTrait } from './types'
import { Screen } from '../core'
import {
  UnsubscribeFromStateAction,
  moduleLinksSlice,
  selectModuleLinkLogs,
  subscribeToStateAction,
} from '../state'

const LOGS_LIMIT = 100

export class OverviewPageLogs implements UIComponentTrait<Widgets.ListElement> {
  private list: Widgets.ListElement
  private screen: Screen
  private unsubscribeFromCurrentLogs: UnsubscribeFromStateAction | null
  private _selectedLinkFrom: string | null
  constructor (screen: Screen, parent?: Widgets.Node) {
    this.unsubscribeFromCurrentLogs = null
    this.screen = screen
    this.list = blessed.list({
      parent,
      fg: 'green',
      width: '100%',
      height: '100%-3',
      label: ' Logs ',
      border: { type: 'line' },
    })
  }
  public selectLink (from: string) {
    if (this._selectedLinkFrom === from) return
    this._selectedLinkFrom = from
    this.unsubscribeFromCurrentLogs?.()
    this.unsubscribeFromCurrentLogs = subscribeToStateAction(moduleLinksSlice.actions.logForModuleLink, (action, state) => {
      if (action.payload.from !== from) return
      const linkLogs = selectModuleLinkLogs(from)(state)
      if (!linkLogs) return
      const limitedLogs = linkLogs.slice(-LOGS_LIMIT)
      this.list.setItems(pluck('message', limitedLogs))
      this.list.scrollTo(limitedLogs.length - 1)
      this.screen.render()
    })
  }
  public get selectedLinkFrom () {
    return this._selectedLinkFrom
  }
  public render () {
    this.list.render()
    return this.list
  }
  public destroy () {
    this.list.destroy()
    this.unsubscribeFromCurrentLogs?.()
  }
}
