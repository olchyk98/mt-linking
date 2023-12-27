import { Screen } from '../core'
import { UIComponentTrait, pageInitMap } from '../components'
import { watchStateValue } from '../state'

/**
* -----
* The purpose of this function is to
* observe the "screen" value change
* in app state and render
* the currently set screen.
* */
export function bindScreenStager (screen: Screen): void {
  let currentPage: UIComponentTrait<unknown> | null = null
  watchStateValue((state) => state.screen.screen, (_, previousPageKey, nextPageKey) => {
    if (previousPageKey === nextPageKey) return
    currentPage?.destroy?.()
    const initPage = pageInitMap[nextPageKey]
    const page = initPage(screen)
    currentPage = page
    page.render()
    screen.render()
  })
}
