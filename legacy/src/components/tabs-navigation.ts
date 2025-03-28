import { any, map } from 'ramda'
import blessed, { Widgets } from 'blessed'
import { UIComponentTrait } from './types'
import { ModuleLink, screenSlice, stateStore, watchStateValue } from '../state'
import { getPackageNameByPath } from '../logic'
import { Screen } from '../core'
import { KEYMAP } from '../constants'

type ListbarElement = Widgets.ListbarElement

const convertLinkToOption = (link: ModuleLink, selectLink: OnLinkSelected | null): Widgets.Types.ListbarCommand => ({
  key: link.from,
  // XXX: Invalid types in the external library.
  // @ts-ignore
  text: `${getPackageNameByPath(link.from, true) ?? '?'} -> ${getPackageNameByPath(link.to, true) ?? '?'}`,
  callback: () => selectLink?.(link.from),
})

export class TabsNavigation implements UIComponentTrait<ListbarElement> {
  private listbar: ListbarElement
  private screen: Screen
  private linkSelectedCallback: OnLinkSelected | null
  private selectedLinkFrom: string | null
  constructor (screen: Screen, parent?: Widgets.Node) {
    this.screen = screen
    this.linkSelectedCallback = null
    this.selectedLinkFrom = null
    this.initListbar(parent)
    this.bindEvents()
  }
  private initListbar (parent?: Widgets.Node) {
    this.listbar = blessed.listbar({
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
          bg: 'yellow',
        },
      },
    })
  }
  private linkNewPackage () {
    stateStore.dispatch(screenSlice.actions.setActiveScreen('CREATE_NEW_LINK'))
  }
  private bindEvents () {
    this.screen.key(KEYMAP.CREATE_NEW_LINK, this.linkNewPackage)
    // TODO: Critical. Needs unsubscribe, otherwise this
    // will trigger N amount of times on each "links" change,
    // where N is amount of times this component has be inited.
    watchStateValue((state) => state.moduleLinks.links, (_, __, links) => {
      const selectFirst = !this.selectedLinkFrom || !any((l) => l.key === this.selectedLinkFrom, this.listbar.options.items)
      const options = map((tab) => convertLinkToOption(tab, this.linkSelectedCallback), links)
      this.listbar.setItems(options)
      if (selectFirst) this.listbar.selectTab(0)
    })
  }
  private unbindEvents () {
    this.screen.unkey(KEYMAP.CREATE_NEW_LINK, this.linkNewPackage)
  }
  public onLinkSelected (callback: OnLinkSelected): TabsNavigation {
    this.linkSelectedCallback = (from) => {
      this.selectedLinkFrom = from
      callback(from)
    }
    return this
  }
  public render () {
    this.listbar.setLabel(' Press N to add a link ')
    return this.listbar
  }
  public destroy () {
    this.listbar.destroy()
    this.unbindEvents()
    this.screen.render()
  }
}

export interface Tab {
  name: string
  key: string
}

type OnLinkSelected = (from: string) => void
