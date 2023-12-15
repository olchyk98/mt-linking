import blessed from 'blessed'
import { bindExitInput } from '../input'

export function spawnScreen (opts: ScreenConstructorArgs = {}) {
  const { bindExit = true } = opts
  const screen = blessed.screen({ smartCSR: true, ...opts })
  if (bindExit) bindExitInput(screen)
  return screen
}

export interface ScreenConstructorArgs {
  title?: string
  bindExit?: boolean
}
