import { isEmpty, map } from 'ramda'
import blessed, { Widgets } from 'blessed'
import { UIComponentTrait } from './types'

type ListbarElement = Widgets.ListbarElement

const convertTabToOption = (tab: Tab): Widgets.Types.ListbarCommand => ({
  key: tab.key,
  // XXX: Invalid types in the external library.
  // @ts-ignore
  text: tab.name,
  callback () {
    // TODO: Implement switching
  },
})

export class TabsNavigation implements UIComponentTrait<ListbarElement> {
  private listbar: ListbarElement
  private tabs: Tab[]
  constructor (parent?: Widgets.Node) {
    this.tabs = [] // Should be pulled from redux state
    this.listbar = this.init(parent)
  }
  private init (parent?: Widgets.Node) {
    const listbar = blessed.listbar({
      parent,
      commands: [],
      items: [],
      autoCommandKeys: true,
      mouse: true,
      keys: true,
      width: '100%',
      height: 3,
      tags: true,
      border: {
        type: 'line',
      },
      style: {
        selected: {
          bg: '#70CBF4',
        },
      },
    })
    return listbar
  }
  appendTab (tab: Tab): void {
    this.tabs.push(tab)
  }
  prependTab (tab: Tab) {
    this.tabs.unshift(tab)
  }
  render () {
    this.listbar.setItems(map(convertTabToOption, this.tabs))
    this.listbar.setLabel('Press N to add')
    return this.listbar
  }
}

export interface Tab {
  name: string
  key: string
}
