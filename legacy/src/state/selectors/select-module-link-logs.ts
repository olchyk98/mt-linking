import { find } from 'ramda'
import { ModuleLinkLog } from '../types'
import { StateSelectorBlueprint } from './types'

export const selectModuleLinkLogs = (
  (from: string) => (state) => {
    const link = find((l) => l.from === from, state.moduleLinks.links)
    return link?.logs ?? null
  }
) satisfies StateSelectorBlueprint<ModuleLinkLog[] | null>

