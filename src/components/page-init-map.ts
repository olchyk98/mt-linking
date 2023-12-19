import { Screen } from '../core'
import { ScreenType } from '../state'
import { NewModuleLinkForm } from './new-module-link-form'
import { OverviewPage } from './overview-page'
import { UIComponentTrait } from './types'

export const pageInitMap = {
  OVERVIEW: (screen) => new OverviewPage(screen),
  CREATE_NEW_LINK: (screen) => new NewModuleLinkForm(screen),
} satisfies Record<ScreenType, PageInitFn>

export type PageInitFn = (screen: Screen) => UIComponentTrait<unknown>
