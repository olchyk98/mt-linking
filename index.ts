import blessed from 'blessed'
import { spawnScreen } from './src/spawn-screen'

// XXX: Probably create an abstraction for
//  - Blessed API
//  - General linking, so that potentially could work anywhere.

function main () {
  const screen = spawnScreen()
  const box = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Hello {bold}world{/bold}!',
    tags: true,
    border: {
      type: 'line',
    },
    style: {
      fg: 'white',
      bg: 'magenta',
      border: {
        fg: '#f0f0f0',
      },
      hover: {
        bg: 'green',
      },
    },
  })
  screen.append(box)
  screen.render() // should be called on each update
}

main()
