import {
  ModuleLinkLogSeverity,
  moduleLinksSlice,
  stateStore,
} from '../state'

export function logForLinker (from: string, message: string, severity: ModuleLinkLogSeverity = 'INFO'): void {
  const action = moduleLinksSlice.actions.logForModuleLink({ from, log: { message, severity } })
  stateStore.dispatch(action)
}
