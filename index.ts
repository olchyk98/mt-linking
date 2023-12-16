import { spawnScreen } from './src/core'
import { NewModuleLinkForm, OverviewPage } from './src/ui'

// TODO: "blessed-contrib" for more widgets

// XXX: Overview Page
//  : Sparkline (To see when update happened) + Table (To see stats, like how many re-builds) + RollingLog (Output from nodemon and transpile)
//
// XXX: Select links (Message (native package) + Tree)

function main () {
  const screen = spawnScreen()
  //const overviewPage = new OverviewPage()
  const newModuleLinkPage = new NewModuleLinkForm(screen)
  //screen.append(overviewPage.render())
  screen.append(newModuleLinkPage.render())
}

try {
  main()
} catch (e) {
  console.log(e)
  console.log('Crashed.')
  process.exit(1)
}
