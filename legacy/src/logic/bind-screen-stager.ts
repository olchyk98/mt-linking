import { Screen } from '../core'
import { UIComponentTrait, pageInitMap } from '../components'
import { screenSlice, subscribeToStateAction } from '../state'

/**
-----
The purpose of this function is to
observe the "screen" value change
in app state and render
the currently set screen.
*/
export function bindScreenStager (screen: Screen): void {
  let currentPage: UIComponentTrait<unknown> | null = null
  subscribeToStateAction(screenSlice.actions.setActiveScreen, (action) => {
    currentPage?.destroy?.()
    const initPage = pageInitMap[action.payload]
    const page = initPage(screen)
    currentPage = page
    page.render()
    screen.render()
  })
}
