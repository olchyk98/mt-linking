import { keys } from 'ramda'
import fs from 'fs'
import { type ResolvedPackage, getPackageAtPath } from './get-package-at-path'

// WARNING: Order matters.
const strategyCheckersMap: Record<LinkingStrategy, StrategyCheckerFn> = {
  TRANSPILED: (items) => items.has('rollup.config.mjs'),
  TRANSPILED_LEGACY (_, { packageJson }) {
    const { scripts: scriptsMap } = packageJson
    if (scriptsMap == null) return false
    const scriptsSet: string[] = keys(scriptsMap)
    return scriptsSet.includes('build') // refers to "yarn build"
  },
  AMEND_NATIVE: (items) => (
    items.has('amend') && items.has('lib')
  ),
  MAKEFILE_BUILD: (items) => items.has('Makefile'),
  NOBUILD_SOURCE: (items) => items.has('src') || items.has('lib'),
}

/**
 * Accepts resolved package or absolute path
 * to a package (may end with "package.json") and
 * returns Symbol for linking strategy that may be
 * applicable for the package.
 *
 * The function will return null if specified absolutePath
 * does not contain a package.
 *
 * The function will return null if specified ResolvedPackage
 * does not match any of the known linking strategies.
 *
 * Supported strategies:
 *  TRANSPILED = For frontend and backend packages that produce dist and have "yarn transpile"
 *  TRANSPILED_LEGACY = For frontend packages that use "yarn build" instead of "yarn transpile"
 *  AMEND_NATIVE = For packages that use amend (backend) -- no transpilation required
 *  MAKEFILE_BUILD = For packages that are transpiled with "Makefile" (executed with "make" native command)
 *  SOURCE_COPY = For packages that don't feature any build step, where "src"/"lib" folders can be deployed "as-is"
 * */
export function getLinkingStrategyForPackage(absolutePath: string): LinkingStrategy | null
export function getLinkingStrategyForPackage(absolutePath: ResolvedPackage): LinkingStrategy | null
export function getLinkingStrategyForPackage (absolutePath: ResolvedPackage | string): LinkingStrategy | null {
  const resolvedPackage = typeof absolutePath === 'object'
    ? absolutePath
    : getPackageAtPath(absolutePath)
  if (resolvedPackage == null) return null
  const folderItems = new Set(fs.readdirSync(resolvedPackage.absolutePath))
  for (const linkingStrategy of keys(strategyCheckersMap)) {
    const checker = strategyCheckersMap[linkingStrategy]
    if (checker(folderItems, resolvedPackage)) {
      return linkingStrategy
    }
  }
  return null
}

type StrategyCheckerFn = (
  (folderItems: Set<string>, resolvedPackage: ResolvedPackage) => boolean | boolean
)

export type LinkingStrategy =
  | 'TRANSPILED' // For frontend and backend packages that produce dist and have "yarn transpile"
  | 'TRANSPILED_LEGACY' // For frontend packages that use "yarn build" instead of "yarn transpile"
  | 'AMEND_NATIVE' // For packages that use amend (backend) -- no transpilation required
  | 'MAKEFILE_BUILD' // For packages that are transpiled with "Makefile" (executed with "make" native command)
  | 'NOBUILD_SOURCE' // For packages that don't feature any build step, where "src"/"lib" folders can be deployed "as-is"

