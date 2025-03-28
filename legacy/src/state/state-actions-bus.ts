import { EventEmitter } from 'events'
import { Middleware } from 'redux'
import TypedEmitter from 'typed-emitter'
import { StateStore } from './types'

export const stateActionsBus = (
  new EventEmitter() as TypedEmitter<{ dispatch(action: unknown, state: StateStore): void }>
)

export const stateActionsBusMiddleware: Middleware<Record<never, unknown>, StateStore> = (
  (store) => (next) => (action) => {
    next(action)
    stateActionsBus.emit('dispatch', action, store.getState())
  }
)
