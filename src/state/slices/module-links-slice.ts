import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { find, findIndex, map, remove } from 'ramda'
import { ModuleLink, ModuleLinkBase, ModuleLinkStatus, ModuleLinksState } from '../types'
import { panic } from '../../utils'

export type CreateModuleLinkBaseActionPayload = string // from

export interface FulfillModuleLinkActionPayload {
  from: string
  to: string
}

export interface SetModuleLinkStatusActionPayload {
  from: string
  status: ModuleLinkStatus
}

const initialModuleLinksState: ModuleLinksState = {
  links: [],
  linkBases: [],
}

export const moduleLinksSlice = createSlice({
  name: 'moduleLinks',
  initialState: initialModuleLinksState,
  reducers: {
    createModuleLinkBase (state, action: PayloadAction<CreateModuleLinkBaseActionPayload>) {
      const alreadySet = find((l) => l.from === action.payload, state.linkBases)
      if (alreadySet) return state
      const linkBase: ModuleLinkBase = { from: action.payload }
      state.linkBases.push(linkBase)
      if (state.linkBases.length > 1) {
        panic('There cannot be more than one link base at the same time.')
      }
    },
    fulfillModuleLink (state, action: PayloadAction<FulfillModuleLinkActionPayload>) {
      const baseIndex = findIndex((l) => l.from === action.payload.from, state.linkBases)
      if (baseIndex === -1) return state
      const link: ModuleLink = { ...state.linkBases[baseIndex], to: action.payload.to }
      state.links.push(link)
      state.linkBases = remove(baseIndex, 1, state.linkBases)
    },
    setModuleLinkState (state, action: PayloadAction<SetModuleLinkStatusActionPayload>) {
      const { from, status } = action.payload
      const links = map(
        (l) => l.from === from ? ({ ...l, status }) : l,
        state.links,
      )
      state.links = links
    },
  },
})
