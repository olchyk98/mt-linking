import { append, assoc, find, findIndex, map, remove } from 'ramda'
import { ModuleLink, ModuleLinkBase, ModuleLinkStatus, ModuleLinksState } from '../types'

const defaultModuleLinksState: ModuleLinksState = {
  links: [],
  linkBases: [],
}

export function moduleLinksReducer (
  state: ModuleLinksState = defaultModuleLinksState,
  action: ModuleLinksReducerAction,
): ModuleLinksState {
  switch (action.type) {
    case 'CREATE_MODULE_LINK_BASE': {
      const alreadySet = find((l) => l.from === action.payload, state.linkBases)
      if (alreadySet) return state
      const linkBase: ModuleLinkBase = { from: action.payload }
      return assoc('linkBases', append(linkBase, state.linkBases), state)
    }
    case 'FULFILL_MODULE_LINK': {
      const baseIndex = findIndex((l) => l.from === action.payload.from, state.linkBases)
      if (baseIndex === -1) return state
      const link: ModuleLink = { ...state.linkBases[baseIndex], to: action.payload.to }
      return {
        ...state,
        links: append(link, state.links),
        linkBases: remove(baseIndex, 1, state.linkBases),
      }
    }
    case 'SET_MODULE_LINK_STATE': {
      const { from, status } = action.payload
      const links = map(
        (l) => l.from === from ? ({ ...l, status }) : l,
        state.links,
      )
      return assoc('links', links, state)
    }
    default: return state
  }
}

export type ModuleLinksReducerAction =
  | CreateModuleLinkBase
  | FulfillModuleLink
  | SetModuleLinkStatus

export interface CreateModuleLinkBase {
  type: 'CREATE_MODULE_LINK_BASE'
  payload: string // from
}

export interface FulfillModuleLink {
  type: 'FULFILL_MODULE_LINK'
  payload: {
    from: string
    to: string
  }
}

export interface SetModuleLinkStatus {
  type: 'SET_MODULE_LINK_STATE'
  payload: {
    from: string
    status: ModuleLinkStatus
  }
}
