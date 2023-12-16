import { last, split } from 'ramda'

export function extractNameFromModuleLinkPath (moduleLinkPath: string): string | null
export function extractNameFromModuleLinkPath (moduleLinkPath: string, defaultValue: string): string
export function extractNameFromModuleLinkPath (moduleLinkPath: string, defaultValue?: string): string | null {
  const parts = split('/', moduleLinkPath)
  return last(parts) ?? defaultValue ?? null
}
