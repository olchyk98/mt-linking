import blessed, { Widgets } from 'blessed'
import blessedContrib from 'blessed-contrib'
import { UIComponentTrait } from './types'
import { Node, Screen } from '../core'
import { moduleLinksSlice, screenSlice, stateStore } from '../state'

export class NewModuleLinkForm implements UIComponentTrait<Widgets.BoxElement> {
  private currentStep: FormStep
  private screen: Screen
  private messageNode: Widgets.MessageElement
  private treeNode: blessedContrib.Widgets.TreeElement
  private layoutContainer: Widgets.BoxElement
  constructor (screen: Screen) {
    this.currentStep = 'NOTIFY_ABOUT_FROM'
    this.screen = screen
    this.initLayoutContainer()
    this.initMessageNode()
    this.initTreeNode()
  }
  private initLayoutContainer () {
    this.layoutContainer = blessed.box({
      width: '100%',
      height: '100%',
    })
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
      buttons: false,
      style: { border: { fg: 'blue' } },
    })
  }
  private initTreeNode () {
    this.treeNode = blessedContrib.tree({
      parent: this.layoutContainer,
      width: 40,
      height: 20,
      left: 'center',
      top: 'center',
      border: 'line',
      hidden: true,
    })
  }
  private setStep (step: FormStep) {
    this.currentStep = step
    this.render()
    this.screen.render()
  }
  private renderNotifyFromPrompt () {
    this.messageNode.log(
      'Select a package that will be linked to source.',
      2,
      () => { this.setStep('SELECT_FROM') },
    )
  }
  private renderNotifyToPrompt () {
    this.messageNode.log(
      'Select a package that the package will be linked to.',
      2,
      () => { this.setStep('SELECT_TO') },
    )
  }
  private renderNotifyLinkCreated () {
    this.messageNode.log(
      'Link has been created!',
      2,
      () => {
        this.screen.remove(this.render())
        stateStore.dispatch(screenSlice.actions.setActiveScreen('OVERVIEW'))
      },
    )
  }
  private renderFromSelector () {
    this.treeNode.hidden = false
    this.treeNode.setData({
      extended: true,
      children: {
        A: {},
        B: {},
        C: {},
      },
    })
    this.treeNode.focus()
    this.treeNode.on('select', (node) => {
      this.treeNode.hidden = true
      stateStore.dispatch(moduleLinksSlice.actions.createModuleLinkBase(node.from))
      this.setStep('NOTIFY_ABOUT_TO')
    })
  }
  private renderToSelector () {
    this.treeNode.hidden = false
    this.treeNode.setData({
      extended: true,
      children: {
        A: {},
        B: {},
        C: {},
      },
    })
    this.treeNode.focus()
    this.treeNode.on('select', (node) => {
      this.treeNode.hidden = true
      stateStore.dispatch(moduleLinksSlice.actions.createModuleLinkBase(node.from))
      this.setStep('LINK_CREATED')
    })
  }
  render (): Widgets.BoxElement {
    // TODO: Don't append/remove different nodes, but instead work with
    // one container (layout)
    // TODO: Display current information module link on all
    // select screens.
    const rendererMap: Record<FormStep, () => Node> = {
      NOTIFY_ABOUT_FROM: this.renderNotifyFromPrompt.bind(this),
      SELECT_FROM: this.renderFromSelector.bind(this),
      NOTIFY_ABOUT_TO: this.renderNotifyToPrompt.bind(this),
      SELECT_TO: this.renderToSelector.bind(this),
      LINK_CREATED: this.renderNotifyLinkCreated.bind(this),
    }
    rendererMap[this.currentStep]()
    return this.layoutContainer
  }
}

type FormStep =
  | 'NOTIFY_ABOUT_FROM'
  | 'SELECT_FROM'
  | 'NOTIFY_ABOUT_TO'
  | 'SELECT_TO'
  | 'LINK_CREATED'
