// TODO: CONTINUE HERE -> Implement selection between screens (where to store the selected link id?) + Support for multi-link in overview-page-logs
//
// XXX: There's one major flow with the current architecture:
//  -> "from" in ModuleLink is treated as a unique value. Therefore,
//  a package can only be linked once.
//  The solution would be to switch to a real unique identifier.

import { spawnScreen } from './src/core'
import { bindScreenStager, initLinkingObservers } from './src/logic'

// TODO: Use "composeWidgets" (function in components)

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

async function main () {
  const screen = spawnScreen()
  initLinkingObservers()
  bindScreenStager(screen)
}

try {
  main()
} catch (e) {
  console.error(e)
  console.info('Global exit.')
  process.exit(1)
}
