import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ScreenState, ScreenType } from '../types'

const initialScreenState: ScreenState = {
  screen: 'OVERVIEW',
}

export const screenSlice = createSlice({
  name: 'screen',
  initialState: initialScreenState,
  reducers: {
    setActiveScreen (state, action: PayloadAction<SetActiveScreenActionPayload>) {
      state.screen = action.payload
    },
  },
})

export type SetActiveScreenActionPayload = ScreenType
