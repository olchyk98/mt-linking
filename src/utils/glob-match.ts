import path from 'path'
import fs from 'fs'
import process from 'process'
import { globSync } from 'glob'

const defaultIgnoreList = [
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
export function globMatch (pattern: string | string[], opts: GlobMatchOpts = {}): string[] {
  const {
    cwd = process.cwd(),
    ignoreList = defaultIgnoreList,
  } = opts
  // NOTE: "fs" is explicitly passed in here to support "memfs" in tests. Without
  // it globSync will break out and try to use original "fs" package.
  const relativePaths = globSync(pattern, { cwd, ignore: ignoreList, fs })
  return relativePaths.map((item) => path.resolve(cwd, item))
}

export interface GlobMatchOpts {
  cwd?: string
  ignoreList?: string[]
}
