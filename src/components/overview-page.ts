import blessed, { Widgets } from 'blessed'
import { UIComponentTrait } from './types'
import { TabsNavigation } from './tabs-navigation'
import { Screen } from '../core'

export class OverviewPage implements UIComponentTrait<Widgets.LayoutElement> {
  private navComponent: TabsNavigation
  private layoutWidget: Widgets.LayoutElement
  private screen: Screen
  constructor (screen: Screen) {
    this.screen = screen
    this.layoutWidget = blessed.layout({
      parent: this.screen,
      layout: 'inline',
      width: '100%',
      height: '100%',
    })
    this.screen.render()
    this.navComponent = new TabsNavigation(this.screen, this.layoutWidget)
  }
  render () {
    this.navComponent.render()
    return this.layoutWidget
  }
  destroy () {
    this.layoutWidget.destroy()
    this.navComponent.destroy()
  }
}
