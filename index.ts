import { spawnScreen } from './src/core'
import { TabsNavigation } from './src/ui'

// TODO: "blessed-contrib" for more widgets

// XXX: Probably create an abstraction for
//  - Blessed API
//  - General linking, so that potentially could work anywhere.

function main () {
  const screen = spawnScreen()
  const nav = new TabsNavigation([
    { key: 'a', name: 'webapp' },
    { key: 'b', name: 'mt-mediaplanning-ui' },
  ])
  screen.append(nav.render())
  screen.render() // should be called on each update
}

try {
  main()
} catch (e) {
  console.log(e)
  console.log('Crashed.')
  process.exit(1)
}
