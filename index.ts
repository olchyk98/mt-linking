import { renderComponents, spawnScreen } from './src/core'
import { OverviewPage } from './src/ui'

// TODO: CONTINUE HERE -> Add "N" (New link) action.

// TODO: "blessed-contrib" for more widgets

// XXX: Probably create an abstraction for
//  - Blessed API
//  - General linking, so that potentially could work anywhere.

function main () {
  const screen = spawnScreen()
  const overviewPage = new OverviewPage(screen)
  renderComponents(screen, [ overviewPage ])
}

try {
  main()
} catch (e) {
  console.log(e)
  console.log('Crashed.')
  process.exit(1)
}
