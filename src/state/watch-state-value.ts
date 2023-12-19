import { compareValues } from '../utils'
import { GetWithStateFn } from './get-with-state'
import { stateStore } from './state-store'
import { StateStore } from './types'

export function watchStateValue <T> (
  getValue: GetWithStateFn<T>,
  callback: WatchStateValueCallback<T>,
): WatchStateValueInterruptFn {
  const initState = stateStore.getState()
  let previousValue = getValue(initState)
  const handleStateChanged = () => {
    const state = stateStore.getState()
    const currentValue = getValue(state)
    if (!compareValues(currentValue, previousValue)) {
      previousValue = currentValue
      callback(state, previousValue, currentValue)
    }
  }

  callback(initState, null, getValue(initState))
  return stateStore.subscribe(handleStateChanged)
}

export type WatchStateValueCallback<T> = (
  (state: StateStore, previousValue: T | null, currentValue: T) => void
)

export type WatchStateValueInterruptFn = () => void
