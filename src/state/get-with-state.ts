import { stateStore } from './state-store'
import { StateStore } from './types'

export function getWithState <T> (getStateValueFn: GetWithStateFn<T>): T {
  const state = stateStore.getState()
  return getStateValueFn(state)
}

export type GetWithStateFn<T> = (state: StateStore) => T
