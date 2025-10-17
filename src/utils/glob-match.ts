import path from 'path'
import process from 'process'
import { globSync } from 'glob'

const ignoreList = [
  '**/node_modules/**',
  '**/dist/**',
]

/**
 * The function takes single or list of patterns
 * and traverses from the current directory (can be changed through opts)
 * to find all files matching the specified patterns.
 *
 * Under the hood the function uses 'glob'.globSync, but also
 * applies path.resolve to always return absolute paths.
 * */
export function globMatch (pattern: string | string[], opts: { cwd?: string } = {}): string[] {
  const cwd = opts.cwd ?? process.cwd()
  const relativePaths = globSync(pattern, { cwd, ignore: ignoreList })
  return relativePaths.map((item) => path.resolve(cwd, item))
}
