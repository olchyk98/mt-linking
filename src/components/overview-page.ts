import blessed, { Widgets } from 'blessed'
import { UIComponentTrait } from './types'
import { TabsNavigation } from './tabs-navigation'
import { Screen } from '../core'
import { OverviewPageLog } from './overview-page-logs'

export class OverviewPage implements UIComponentTrait<Widgets.LayoutElement> {
  private navComponent: TabsNavigation
  private logsComponent: OverviewPageLog
  private layoutWidget: Widgets.LayoutElement
  private screen: Screen
  constructor (screen: Screen) {
    this.screen = screen
    this.initLayout()
    this.initNav()
    this.initLogs()
  }
  private initLayout () {
    this.layoutWidget = blessed.layout({
      parent: this.screen,
      layout: 'grid',
      width: '100%',
      height: '100%',
    })
  }
  private initNav () {
    this.navComponent = new TabsNavigation(this.screen, this.layoutWidget)
  }
  private initLogs () {
    this.logsComponent = new OverviewPageLog(this.screen, this.layoutWidget)
  }
  render () {
    this.navComponent.render()
    this.logsComponent.render()
    this.screen.render()
    return this.layoutWidget
  }
  destroy () {
    this.layoutWidget.destroy()
    this.navComponent.destroy()
  }
}
