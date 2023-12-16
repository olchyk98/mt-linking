import { forEach } from 'ramda'
import { UIComponentTrait } from '../ui/types'
import { Node } from './types'

export function renderComponents (components: UIComponentTrait<Node>[]): void {
  forEach<UIComponentTrait<Node>, UIComponentTrait<Node>[]>((l) => l.render(), components)
}
