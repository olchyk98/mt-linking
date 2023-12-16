import blessed, { Widgets } from 'blessed'
import { UIComponentTrait } from './types'
import { Screen } from '../core'
import { TabsNavigation } from './tabs-navigation'

export class OverviewPage implements UIComponentTrait<Widgets.LayoutElement> {
  private navComponent: TabsNavigation
  private layoutWidget: Widgets.LayoutElement

  constructor (screen: Screen) {
    this.layoutWidget = blessed.layout({
      parent: screen,
      layout: 'inline',
      width: '100%',
      height: '100%',
    })
    this.navComponent = new TabsNavigation(this.layoutWidget)
  }

  render () {
    this.navComponent.render()
    return this.layoutWidget
  }
}
