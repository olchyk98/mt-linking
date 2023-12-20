import { spawnScreen } from './src/core'
import { bindScreenStager, initLinkingObservers } from './src/logic'

// TODO: "blessed-contrib" for more widgets
// TODO: Re-write with "react-blessed" :)

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
