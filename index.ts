import { spawnScreen } from './src/core'
import { bindScreenStager, initLinkingObservers } from './src/logic'

// TODO: "blessed-contrib" for more widgets
// TODO: Re-write with "react-blessed" :)
// TODO: For backend packages, output info in logs,
// saying that webapp has to be restarted.
// TODO: For frontend packages, output info in logs,
// saying that the web application running in browser
// may need an additional reload afterwards.

// XXX: Overview Page
//  : Sparkline (To see when update happened) + Table (To see stats, like how many re-builds) + RollingLog (Output from nodemon and transpile)

function main () {
  const screen = spawnScreen()
  initLinkingObservers()
  bindScreenStager(screen)
}

try {
  main()
} catch (e) {
  console.error(e)
  console.info('Panic.')
  process.exit(1)
}
