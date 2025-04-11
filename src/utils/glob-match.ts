import { GlobOptions, globSync } from 'glob'

export function globMatch (pattern: string | string[], opts: Pick<GlobOptions, 'cwd'>): string[] {
  return globSync(pattern, opts)
}
