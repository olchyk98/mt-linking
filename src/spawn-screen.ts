import blessed from 'blessed'

export function spawnScreen (opts: ScreenConstructorArgs = {}) {
  const screen = blessed.screen({ smartCSR: true, ...opts })
  return screen
}

export interface ScreenConstructorArgs {
  title?: string
}
