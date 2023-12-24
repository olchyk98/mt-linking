import type { ActionCreatorWithPayload } from '@reduxjs/toolkit/dist/createAction'
import { StateStore } from './types'
import { stateActionsBus } from './state-actions-bus'

export function subscribeToStateAction<T extends ActionCreatorWithPayload<unknown>> (
  subscribedAction: T,
  callback: SubscribeToStateActionCallback<T>,
): void {
  stateActionsBus.on('dispatch', (action, state) => {
    if (subscribedAction.match(action)) {
      callback(action as unknown as ReturnType<T>, state)
    }
  })
}

export type SubscribeToStateActionCallback<T extends ActionCreatorWithPayload<unknown>> = (
  (payload: ReturnType<T>, state: StateStore) => void
)
