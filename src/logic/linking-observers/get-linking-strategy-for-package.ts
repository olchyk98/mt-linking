import fs from 'fs'
import Bluebird from 'bluebird'
import { isNil, keys, toPairs } from 'ramda'
import { PackageJson, getPackageJsonForPath } from '../package'
import { LinkingStrategy } from './types'

const strategyCheckersMap: Record<LinkingStrategy, StrategyCheckerFn> = {
  TRANSPILED: (items) => items.has('rollup.config.mjs'),
  TRANSPILED_LEGACY (_, packageJson) {
    const { scripts: scriptsMap } = packageJson
    if (isNil(scriptsMap)) return false
    const scriptsSet = new Set(keys(scriptsMap))
    return scriptsSet.has('build') // refers to "yarn build"
  },
  AMEND_NATIVE: (items) => (
    items.has('amend') && items.has('lib')
  ),
}

async function getOptimalStrategy (folderItems: Set<string>, packageJson: PackageJson): Promise<LinkingStrategy | null> {
  // Doing hacky solution with .reduce, because there's no .find method available.
  const optimalStrategy = Bluebird.reduce(
    toPairs(strategyCheckersMap),
    async (foundPair, [ strategyKey, checkFn ]) => {
      if (foundPair) return foundPair
      const passes = await checkFn(folderItems, packageJson)
      return passes ? strategyKey : foundPair
    },
    <LinkingStrategy | null> null,
  )
  return optimalStrategy
}

/**
* -----
* After taking "absolutePath" that points to a valid
* package, the function will analyze the folder contents
* and decide an appropriate transpiling strategy for the
* specified package.
*
* This is needed, because different packages
* require different ways for watching/transpiling/copying dist.
*
* The function will perform analysis in a promise,
* to prevent thread blocking.
* */
export async function getLinkingStrategyForPackage (absolutePath: string): Promise<LinkingStrategy | null> {
  try {
    const packageJson = await getPackageJsonForPath(absolutePath, false)
    if (!packageJson) return null
    const folderItems = new Set(await fs.promises.readdir(absolutePath))
    return getOptimalStrategy(folderItems, packageJson)
  } catch (_) {
    return null
  }
}

type StrategyCheckerFn = (
  (folderItems: Set<string>, packageJson: PackageJson) => boolean | Promise<boolean>
)
