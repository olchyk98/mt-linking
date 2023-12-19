import blessed, { Widgets } from 'blessed'
import { head, pluck } from 'ramda'
import { UIComponentTrait } from './types'
import { Node, Screen } from '../core'
import { getWithState, moduleLinksSlice, screenSlice, stateStore } from '../state'
import { getLinkablePackages, getLinkablePackagesForSource } from '../logic'
import { panic } from '../utils'

export class NewModuleLinkForm implements UIComponentTrait<Node> {
  private currentStep: FormStep
  private screen: Screen
  private messageNode: Widgets.MessageElement
  private listNode: Widgets.ListElement
  constructor (screen: Screen) {
    this.currentStep = 'NOTIFY_ABOUT_FROM'
    this.screen = screen
    this.initMessageNode()
    this.initTreeNode()
  }
  private initMessageNode () {
    this.messageNode = blessed.message({
      parent: this.screen,
      name: 'Hello',
      top: 'center',
      left: 'center',
      height: 3,
      width: '100%',
      border: 'line',
      align: 'center',
      style: { border: { fg: 'blue' } },
      hidden: true,
    })
  }
  private initTreeNode () {
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
  private renderNotifyFromPrompt () {
    this.messageNode.display(
      'Select a package that will be linked to source.',
      2,
      () => {
        this.setStep('SELECT_FROM')
      },
    )
  }
  private renderNotifyToPrompt () {
    this.messageNode.display(
      'Select a package that the package will be linked to.',
      2,
      () => {
        this.setStep('SELECT_TO')
      },
    )
    this.screen.render()
  }
  private renderNotifyLinkCreated () {
    this.messageNode.display(
      'Link has been created!',
      2,
      () => {
        this.screen.remove(this.render())
        stateStore.dispatch(screenSlice.actions.setActiveScreen('OVERVIEW'))
      },
    )
  }
  private renderFromSelector () {
    const linkablePackages = getLinkablePackages()
    this.listNode.show()
    this.listNode.setItems(pluck('name', linkablePackages))
    this.listNode.on('select', (_, selectedIndex) => {
      this.listNode.hide()
      const selectedLink = linkablePackages[selectedIndex]
      stateStore.dispatch(moduleLinksSlice.actions.createModuleLinkBase(selectedLink.absolutePath))
      this.setStep('NOTIFY_ABOUT_TO')
    })
    this.listNode.focus()
    this.screen.render()
  }
  private renderToSelector () {
    const linkBase = getWithState((state) => head(state.moduleLinks.linkBases))
    const availablePackagesForSource = linkBase && getLinkablePackagesForSource(linkBase.from)
    if (!availablePackagesForSource) panic('Tried to render "To" selector with no valid base specified.')
    this.listNode.show()
    this.listNode.setItems(pluck('name', availablePackagesForSource))
    this.listNode.focus()
    this.listNode.on('select', (_, selectedIndex) => {
      const selectedLink = availablePackagesForSource[selectedIndex]
      const fulfillAction = moduleLinksSlice.actions.fulfillModuleLink({
        from: linkBase.from, to: selectedLink.absolutePath,
      })
      stateStore.dispatch(fulfillAction)
      this.setStep('LINK_CREATED')
    })
    this.screen.render()
  }
  render (): Widgets.Node {
    const rendererMap: Record<FormStep, () => Node> = {
      NOTIFY_ABOUT_FROM: this.renderNotifyFromPrompt.bind(this),
      SELECT_FROM: this.renderFromSelector.bind(this),
      NOTIFY_ABOUT_TO: this.renderNotifyToPrompt.bind(this),
      SELECT_TO: this.renderToSelector.bind(this),
      LINK_CREATED: this.renderNotifyLinkCreated.bind(this),
    }
    return rendererMap[this.currentStep]()
  }
}

type FormStep =
  | 'NOTIFY_ABOUT_FROM'
  | 'SELECT_FROM'
  | 'NOTIFY_ABOUT_TO'
  | 'SELECT_TO'
  | 'LINK_CREATED'
