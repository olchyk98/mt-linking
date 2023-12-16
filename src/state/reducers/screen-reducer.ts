import { assoc } from 'ramda'
import { ScreenState, ScreenType } from '../types'

const defaultScreenState: ScreenState = {
  screen: 'OVERVIEW',
}

export function screenReducer (
  state: ScreenState = defaultScreenState,
  action: ScreenReducerAction,
) {
  switch (action.type) {
    case 'SET_ACTIVE_SCREEN': {
      return assoc('screen', action.payload, state)
    }
    default: return state
  }
}

export type ScreenReducerAction =
  | SetActiveScreen

export interface SetActiveScreen {
  type: 'SET_ACTIVE_SCREEN'
  payload: ScreenType
}
