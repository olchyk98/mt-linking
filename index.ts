// TODO: CONTINUE HERE -> Implement EventListener which LinkerManager (class to convert from "initLinkingObservers")
// would subscribe to and listen to all redux actions and payloads (use redux middleware for it) - make it
// on "state" level, so that it can be used for other features as well: stateActionEmitter.on('SLICE_NAME-ACTION_NAME', ...)
// TODO: CONTINUE HERE -> support multiple screens (it fixes logging as well.)

// XXX: There's one major flow with the current architecture:
//  -> "from" in ModuleLink is treated as a unique value. Therefore,
//  a package can only be linked once.
//  The solution would be to switch to a real unique identifier.

import { spawnScreen } from './src/core'
import { bindScreenStager, initLinkingObservers } from './src/logic'
import { stateStore } from './src/state'

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
