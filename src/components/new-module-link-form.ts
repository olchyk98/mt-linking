import blessed, { Widgets } from 'blessed'
import { head, pluck } from 'ramda'
import { UIComponentTrait } from './types'
import { Screen } from '../core'
import { getWithState, moduleLinksSlice, screenSlice, stateStore } from '../state'
import { getLinkablePackages, getLinkablePackagesForSource } from '../logic'

export class NewModuleLinkForm implements UIComponentTrait<void> {
  private currentStep: FormStep
  private screen: Screen
  private messageNode: Widgets.MessageElement
  private stageTitleNode: Widgets.BoxElement
  private listNode: Widgets.ListElement
  constructor (screen: Screen) {
    this.currentStep = 'SELECT_FROM'
    this.screen = screen
    this.initMessageNode()
    this.initStageTitleNode()
    this.initListNode()
  }
  private initMessageNode () {
    this.messageNode = blessed.message({
      parent: this.screen,
      name: 'Hello',
      top: 'center',
      left: 'center',
      height: 3,
      width: '100%',
      keys: true,
      border: 'line',
      align: 'center',
      style: { border: { fg: 'blue' } },
      hidden: true,
    })
  }
  private initStageTitleNode () {
    this.stageTitleNode = blessed.box({
      parent: this.screen,
      height: 1,
      align: 'center',
      left: 'center',
      bottom: 0,
      fg: 'red',
      width: '100%',
    })
  }
  private initListNode () {
    this.listNode = blessed.list({
      parent: this.screen,
      width: 40,
      height: 20,
      keys: true,
      interactive: true,
      left: 'center',
      selectedBg: 'blue',
      top: 'center',
      border: 'line',
      hidden: true,
    })
  }
  private setStep (step: FormStep) {
    this.currentStep = step
    this.render()
  }
  private renderFromSelector () {
    this.exitForm()
    return
    const linkablePackages = getLinkablePackages()
    this.stageTitleNode.setContent('Select a package that will be linked to source.')
    this.listNode.show()
    this.listNode.setItems(pluck('name', linkablePackages))
    this.listNode.once('select', (_, selectedIndex) => {
      this.listNode.hide()
      const selectedLink = linkablePackages[selectedIndex]
      stateStore.dispatch(moduleLinksSlice.actions.createModuleLinkBase(selectedLink.absolutePath))
      this.setStep('SELECT_TO')
    })
    this.listNode.focus()
    this.screen.render()
  }
  private renderToSelector () {
    const linkBase = getWithState((state) => head(state.moduleLinks.linkBases))
    const availablePackagesForSource = linkBase && getLinkablePackagesForSource(linkBase.from)
    if (!linkBase || !availablePackagesForSource?.length) {
      this.messageNode.log(
        'Selected package has no known links. Add them with "yarn link".',
        3,
        () => { this.exitForm() },
      )
      return
    }
    this.stageTitleNode.setContent('Select a package that the selected package will be linked to.')
    this.listNode.show()
    this.listNode.setItems(pluck('name', availablePackagesForSource))
    this.listNode.select(0)
    this.listNode.focus()
    this.listNode.once('select', (_, selectedIndex) => {
      const selectedLink = availablePackagesForSource[selectedIndex]
      const fulfillAction = moduleLinksSlice.actions.fulfillModuleLink({
        from: linkBase.from, to: selectedLink.absolutePath,
      })
      stateStore.dispatch(fulfillAction)
      this.listNode.hide()
      this.exitForm()
    })
    this.screen.render()
  }
  private exitForm () {
    this.destroy()
    stateStore.dispatch(screenSlice.actions.setActiveScreen('OVERVIEW'))
  }
  destroy () {
    this.messageNode.destroy()
    this.stageTitleNode.destroy()
    this.listNode.destroy()
    this.screen.render()
    stateStore.dispatch(moduleLinksSlice.actions.resetLinkBases())
  }
  render (): void {
    const rendererMap: Record<FormStep, () => void> = {
      SELECT_FROM: this.renderFromSelector.bind(this),
      SELECT_TO: this.renderToSelector.bind(this),
    }
    rendererMap[this.currentStep]()
  }
}

type FormStep =
  | 'SELECT_FROM'
  | 'SELECT_TO'
