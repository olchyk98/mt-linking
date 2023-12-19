import { spawnScreen } from './src/core'
import { bindScreenStager } from './src/logic/bind-screen-stager'

// TODO: "blessed-contrib" for more widgets

// XXX: Overview Page
//  : Sparkline (To see when update happened) + Table (To see stats, like how many re-builds) + RollingLog (Output from nodemon and transpile)
//
// XXX: Select links (Message (native package) + Tree)

function main () {
  const screen = spawnScreen()
  bindScreenStager(screen)
}

try {
  main()
} catch (e) {
  console.error(e)
  console.info('Panic.')
  process.exit(1)
}
