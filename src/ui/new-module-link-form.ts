import blessed, { Widgets } from 'blessed'
import { pluck } from 'ramda'
import { UIComponentTrait } from './types'
import { Node, Screen } from '../core'
import { moduleLinksSlice, screenSlice, stateStore } from '../state'
import { getLinkablePackagesWithMeta } from '../logic/get-linkable-packages-with-meta'

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
    // TODO: CONTINUE HERE ->
    // TODO: A separate function that
    // would fetch dependencies for
    // specified package by path from
    // package.json and check if any
    // of the linked packages can
    // be linked there.
    const linksWithMeta = getLinkablePackagesWithMeta()
    this.listNode.show()
    this.listNode.setItems(pluck('name', linksWithMeta))
    this.listNode.on('select', (_, selectIndex) => {
      console.log(selectIndex)
      stateStore.dispatch(moduleLinksSlice.actions.createModuleLinkBase(node.from))
      this.setStep('NOTIFY_ABOUT_TO')
    })
    this.listNode.focus()
    this.screen.render()
  }
  private renderToSelector () {
    this.listNode.show()
    this.listNode.setItems([ 'a', 'b', 'c' ])
    this.listNode.focus()
    this.listNode.on('select', (node) => {
      stateStore.dispatch(moduleLinksSlice.actions.createModuleLinkBase(node.from))
      this.setStep('LINK_CREATED')
    })
    this.screen.render()
  }
  render (): Widgets.Node {
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
    return rendererMap[this.currentStep]()
  }
}

type FormStep =
  | 'NOTIFY_ABOUT_FROM'
  | 'SELECT_FROM'
  | 'NOTIFY_ABOUT_TO'
  | 'SELECT_TO'
  | 'LINK_CREATED'
