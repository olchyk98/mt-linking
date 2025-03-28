import { SelectFromState } from '../get-with-state'

export type StateSelectorBlueprint<T> = (...args: any[]) => SelectFromState<T>
