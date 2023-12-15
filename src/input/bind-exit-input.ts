import { Screen } from '../core'

/**
* -----
* The purpose of this function is to bind
* exit buttons (for example, CTRL+C) to the
* input screen.
*
* This is designed to allow the user to
* exit the application with their keyboard.
* */
export function bindExitInput (screen: Screen): void {
  screen.key([ 'C-c', 'q', 'escape' ], () => {
    process.exit(0)
  })
}
