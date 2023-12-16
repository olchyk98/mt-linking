import blessed, { Widgets } from 'blessed'
import blessedContrib from 'blessed-contrib'
import { UIComponentTrait } from './types'
import { Node, Screen } from '../core'
import { moduleLinksSlice, stateStore } from '../state'

export class NewModuleLinkForm implements UIComponentTrait<Node> {
  private currentStep: FormStep
  private screen: Screen
  private messageNode: Widgets.MessageElement
  constructor (screen: Screen) {
    this.currentStep = 'NOTIFY_ABOUT_FROM'
    this.screen = screen
    this.initMessageNode()
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
    this.screen.render()
    return this.messageNode
  }
  private renderNotifyToPrompt () {
    this.messageNode.log(
      'Select a package that the package will be linked to.',
      2,
      () => { this.setStep('SELECT_TO') },
    )
    this.screen.render()
    return this.messageNode
  }
  private renderSelectFrom () {
    const tree = blessedContrib.tree({
      width: 40,
      height: 20,
      border: 'line',
      shadow: true,
      left: 'center',
      top: 'center',
      fg: 'green',
    })
    tree.focus()
    tree.setData({
      extended: true,
      children: {
        A: {},
        B: {},
        C: {},
      },
    })
    tree.focus()
    this.screen.append(tree)
    tree.on('select', (node) => {
      stateStore.dispatch(moduleLinksSlice.actions.createModuleLinkBase(node.from))
      this.screen.remove(tree)
      this.setStep('NOTIFY_ABOUT_TO')
    })
    return tree
  }
  render (): Node {
    const rendererMap: Record<FormStep, () => Node> = {
      NOTIFY_ABOUT_FROM: this.renderNotifyFromPrompt.bind(this),
      SELECT_FROM: this.renderSelectFrom.bind(this),
      NOTIFY_ABOUT_TO: this.renderNotifyToPrompt.bind(this),
      SELECT_TO: // TODO: CONTINUE HERE ->>>
      LINK_CREATED: this.renderNotifyLinkCreated.bind(this),
    }
    const renderer = rendererMap[this.currentStep]
    return renderer()
  }
}

type FormStep =
  | 'NOTIFY_ABOUT_FROM'
  | 'SELECT_FROM'
  | 'NOTIFY_ABOUT_TO'
  | 'SELECT_TO'
  | 'LINK_CREATED'
