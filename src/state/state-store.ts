import { configureStore } from '@reduxjs/toolkit'
import { storeReducer } from './slices'

export const stateStore = configureStore({
  reducer: storeReducer,
})
