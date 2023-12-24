import { configureStore } from '@reduxjs/toolkit'
import { storeReducer } from './slices'
import { stateActionsBusMiddleware } from './state-actions-bus'

export const stateStore = configureStore({
  reducer: storeReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(stateActionsBusMiddleware)
  ),
})
