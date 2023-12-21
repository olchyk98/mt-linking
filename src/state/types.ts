import type { storeReducer } from './slices'

export type StateStore = ReturnType<typeof storeReducer>

export interface ScreenState {
  screen: ScreenType
}

export interface ModuleLinksState {
  links: ModuleLink[] // For those that are defined
  linkBases: ModuleLinkBase[] // For those in progress
}

export type ScreenType =
  | 'OVERVIEW'
  | 'CREATE_NEW_LINK'

export interface ModuleLink {
  from: string
  to: string
  status?: ModuleLinkStatus
  logs: ModuleLinkLog[]
}

export interface ModuleLinkLog {
  message: string
  severity: ModuleLinkLogSeverity
}

export type ModuleLinkLogSeverity =
  | 'info'
  | 'error'
  | 'success'

export type ModuleLinkBase = (
  Required<Pick<ModuleLink, 'from'>> & Partial<Pick<ModuleLink, 'to'>>
)

export interface ModuleLinkStatus {
  message?: string
  status: ModuleLinkStatusType
}

export type ModuleLinkStatusType =
  | 'DEAD' // The link has not been executed yet
  | 'FAILED' // The link has failed
  | 'OK' // The link is active
