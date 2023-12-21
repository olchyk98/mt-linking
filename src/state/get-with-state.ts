import { stateStore } from './state-store'
import { StateStore } from './types'

export function getWithState <T> (getStateValueFn: SelectFromState<T>): T {
  const state = stateStore.getState()
  return getStateValueFn(state)
}

export type SelectFromState<T> = (state: StateStore) => T
