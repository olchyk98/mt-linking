import { combineReducers } from '@reduxjs/toolkit'
import { screenSlice } from './screen-slice'
import { moduleLinksSlice } from './module-links-slice'

export const storeReducer = combineReducers({
  screen: screenSlice.reducer,
  moduleLinks: moduleLinksSlice.reducer,
})

export * from './screen-slice'
export * from './module-links-slice'
