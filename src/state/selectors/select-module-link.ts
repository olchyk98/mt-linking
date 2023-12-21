import { find } from 'ramda'
import { ModuleLink } from '../types'
import { StateSelectorBlueprint } from './types'

export const selectModuleLink = (
  (from: string) => (state) => {
    const link = find((l) => l.from === from, state.moduleLinks.links)
    return link ?? null
  }
) satisfies StateSelectorBlueprint<ModuleLink | null>

