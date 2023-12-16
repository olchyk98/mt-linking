import { combineReducers } from '@reduxjs/toolkit'
import { screenReducer } from './screen-reducer'
import { moduleLinksReducer } from './module-links-reducer'

export const storeReducer = combineReducers({
  screen: screenReducer,
  moduleLinks: moduleLinksReducer,
})
