import type { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit/dist/createAction'
import { StateStore } from './types'
import { stateActionsBus } from './state-actions-bus'

export function subscribeToStateAction<P = any, T extends string = string> (
  subscribedAction: ActionCreatorWithPayload<P, T>,
  callback: SubscribeToStateActionCallback<P, T>,
): UnsubscribeFromStateAction {
  const handleEvent = async (payload: unknown, state: StateStore) => {
    if (subscribedAction.match(payload)) {
      await callback(payload, state)
    }
  }

  stateActionsBus.on('dispatch', handleEvent)
  return () => stateActionsBus.off('dispatch', handleEvent)
}

export type SubscribeToStateActionCallback<P = any, T extends string = string> = (
  (payload: PayloadAction<P, T>, state: StateStore) => void | Promise<void>
)

export type UnsubscribeFromStateAction = () => void
