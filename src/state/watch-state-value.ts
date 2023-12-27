import { compareValues } from '../utils'
import { SelectFromState } from './get-with-state'
import { stateStore } from './state-store'
import { StateStore } from './types'

export function watchStateValue <T> (
  getValue: SelectFromState<T>,
  callback: WatchStateValueCallback<T>,
): WatchStateValueInterruptFn {
  const initState = stateStore.getState()
  let previousValue = getValue(initState)
  const handleStateChanged = async () => {
    const state = stateStore.getState()
    const currentValue = getValue(state)
    if (!compareValues(currentValue, previousValue)) {
      await callback(state, previousValue, currentValue)
      previousValue = currentValue
    }
  }

  callback(initState, null, getValue(initState))
  return stateStore.subscribe(handleStateChanged)
}

export type WatchStateValueCallback<T> = (
  (state: StateStore, previousValue: T | null, currentValue: T) => void | Promise<void>
)

export type WatchStateValueInterruptFn = () => void
