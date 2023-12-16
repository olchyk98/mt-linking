import { forEach, map } from 'ramda'
import { UIComponentTrait } from '../ui/types'
import { Node, Screen } from './types'

export function renderComponents (
  screen: Screen,
  components: UIComponentTrait<Node>[],
): void {
  const instances = map( (l) => l.render(), components)
  const append = screen.children.length
  if (append) forEach<Node, Node[]>((l) => screen.append(l), instances)
  screen.render()
}
