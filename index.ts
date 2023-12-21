import blessed from 'blessed'
import { composeWidgets } from './src/components'
import { spawnScreen } from './src/core'
import { bindScreenStager, initLinkingObservers } from './src/logic'

// TODO: Write tests for linker

// TODO: "blessed-contrib" for more widgets
// TODO: Re-write with "react-blessed" :)
// TODO: For backend packages, output info in logs,
// saying that webapp has to be restarted.
// TODO: For frontend packages, output info in logs,
// saying that the web application running in browser
// may need an additional reload afterwards.

// XXX: Overview Page
//  : Sparkline (To see when update happened) + Table (To see stats, like how many re-builds) + RollingLog (Output from nodemon and transpile)

//function main () {
//const screen = spawnScreen()
//initLinkingObservers()
//bindScreenStager(screen)
//}

function main () {
  const screen = spawnScreen()
  const table = composeWidgets({
    key: 'main',
    widget: blessed.layout({
      layout: 'inline',
      parent: screen,
      height: '100%',
      width: '100%',
    }),
    children: [
      {
        key: 'nav',
        widget: blessed.box({
          content: 'Hello, world',
          align: 'center',
          height: 10,
          width: '100%',
          border: 'line',
        }),
      },
      {
        key: 'content',
        widget: blessed.box({
          content: 'Content',
          height: 20,
          width: '100%',
          align: 'center',
          border: 'line',
        }),
      },
    ],
  })
  screen.render()
}

try {
  main()
} catch (e) {
  console.error(e)
  console.info('Panic.')
  process.exit(1)
}
