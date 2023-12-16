import { createStore } from 'redux'
import { storeReducer } from './reducers'

export const stateStore = createStore(storeReducer)
