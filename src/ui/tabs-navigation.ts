import { map } from 'ramda'
import blessed, { Widgets } from 'blessed'
import { UIComponentTrait } from './types'

type ListbarElement = Widgets.ListbarElement

const convertTabToOption = (tab: Tab): Widgets.Types.ListbarCommand => ({
  key: tab.key,
  callback () {

  },
})

export class TabsNavigation implements UIComponentTrait<ListbarElement> {
  private listbar: ListbarElement
  private tabs: Tab[]
  constructor (tabs: Tab[]) {
    this.tabs = tabs
    this.listbar = this.init()
  }
  private init () {
    const listbar = blessed.listbar()
    listbar.setItems(map(convertTabToOption, this.tabs))
    return listbar
  }
  appendTab (tab: Tab): void {
    this.tabs.push(tab)
  }
  prependTab (tab: Tab) {
    this.tabs.unshift(tab)
  }
  get () {
    return this.listbar
  }
}

export interface Tab {
  name: string
  key: string
}
