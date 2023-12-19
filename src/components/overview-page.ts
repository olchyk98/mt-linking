import blessed, { Widgets } from 'blessed'
import { UIComponentTrait } from './types'
import { TabsNavigation } from './tabs-navigation'

export class OverviewPage implements UIComponentTrait<Widgets.LayoutElement> {
  private navComponent: TabsNavigation
  private layoutWidget: Widgets.LayoutElement
  constructor () {
    this.layoutWidget = blessed.layout({
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
