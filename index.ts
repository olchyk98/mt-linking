// TODO: CONTINUE HERE -> Support for multi-link in overview-page-logs
//
// XXX: There's one major flow with the current architecture:
//  -> "from" in ModuleLink is treated as a unique value. Therefore,
//  a package can only be linked once.
//  The potential solution would be to convert "to" to an array
//  so that one package could be linked to zzmultiple packages
//      -> This would also mean that nav item would not have
//      content "1:package_name -> package_name", but just "1:package_name",
//      where in logs/overview page widget you could see what
//      packages the from is linked to

import { spawnScreen } from './src/core'
import { bindScreenStager, initLinkingObservers } from './src/logic'
import { screenSlice, stateStore } from './src/state'

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
  stateStore.dispatch(screenSlice.actions.setActiveScreen('OVERVIEW'))
}

try {
  main()
} catch (e) {
  console.log(e)
  process.exit()
}
