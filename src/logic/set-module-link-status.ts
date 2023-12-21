import {
  ModuleLinkStatusType,
  moduleLinksSlice,
  stateStore,
} from '../state'

export function setModuleLinkStatus (from: string, status: ModuleLinkStatusType, message?: string): void {
  const action = moduleLinksSlice.actions.setModuleLinkStatus({ from, status: { status, message } })
  stateStore.dispatch(action)
}
