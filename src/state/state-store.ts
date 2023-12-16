import { configureStore } from '@reduxjs/toolkit'
import { storeReducer } from './reducers'

export const stateStore = configureStore({
  reducer: storeReducer,
})
