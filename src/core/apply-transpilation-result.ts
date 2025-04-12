import fs from 'fs'
import path from 'path'
import { type LinkingStrategy, getLinkingStrategyForPackage } from './get-linking-strategy-for-package'
import { type ResolvedPackage, getPackageAtPath } from './get-package-at-path'
import { executeShell } from '../utils'
import { getWorkspaceRootPathForPackage } from './get-workspace-root-path-for-package'
import { logAsLinker } from '../cli/log'

async function resolveModuleLocationsForSource (source: ResolvedPackage, destination: ResolvedPackage): Promise<string[] | never> {
  // XXX: When working in workspaces, we don't want to navigate ONLY to package's
  // node_modules, because that one most likely won't have the source package,
  // due to how hoisting in workspaces works. Therefore we have to take package's
  // node_modules AND workspace root's node_modules as dirs to look
  // for the deployed source package code for.
  const rootPath = getWorkspaceRootPathForPackage(destination.absolutePath)
  // XXX: We're searching for all occurrences, because there's a high chance
  // there's more than one. Yarn and PNPM may install different versions
  // of the same package and not hoist in case different dependencies require
  // different semver incompatible versions of the source package.
  const args = [ 'node_modules', '-type d', `-path "*node_modules/${source.packageJson.name}"` ]
  const workspaceResult = rootPath && await executeShell('find', args, { cwd: rootPath })
  const packageResult = await executeShell('find', args, { cwd: destination.absolutePath })
  const workspaceLocations = rootPath && workspaceResult && workspaceResult.split('\n').filter(Boolean).map((s) => path.resolve(rootPath, s))
  const packageLocations = packageResult.split('\n').filter(Boolean).map((s) => path.resolve(destination.absolutePath, s))
  const locations = [ ...workspaceLocations || [], ...packageLocations ]
  logAsLinker(`Resolved to ${locations.length} locations.`)
  return locations
}

const copyDistForLink: ApplyTranspilationResultFn = async (source, destination) => {
  const sourceDist = path.resolve(source.absolutePath, 'dist')
  const dests = await resolveModuleLocationsForSource(source, destination)
  for (const dest of dests) {
    const destDist = path.resolve(dest, 'dist')
    fs.rmSync(destDist, { recursive: true })
    fs.cpSync(sourceDist, destDist, { recursive: true })
  }
  return true as const
}

const copyAmendSourcesForLink: ApplyTranspilationResultFn = async (source, destination) => {
  const targets = [ 'amend', 'boundaries', 'lib' ]
  const destBases = await resolveModuleLocationsForSource(source, destination)
  for (const destBase of destBases) {
    for (const target of targets) {
      const dist = path.resolve(source.absolutePath, target)
      const dest = path.resolve(destBase, target)
      fs.rmSync(dest, { recursive: true })
      fs.cpSync(dist, dest, { recursive: true })
    }
  }
  return true as const
}

const strategyApplyResultFnMap: Record<LinkingStrategy, ApplyTranspilationResultFn> = {
  TRANSPILED: copyDistForLink,
  TRANSPILED_LEGACY: copyDistForLink,
  MAKEFILE_BUILD: copyDistForLink,
  AMEND_NATIVE: copyAmendSourcesForLink,
}

/**
 * The function accepts source and destination
 * packages and applies transpilation result
 * from the source package to the destination
 * package.
 *
 * It is required that the source package
 * has previously been transpiled with
 * "transpilePackage" function, otherwise
 * this function may crash with unexpected error.
 *
 * The function will return null if sourceAbsolutePath
 * or destinationAbsolutePath does not point
 * to a folder with a valid package.json.
 *
 * The function will return null if linkingStrategy
 * was not specified and package at sourceAbsolutePath
 * does not have a supported linkingStrategy.
 *
 * The function returns true on success and throws on error.
 * */
export async function applyTranspilationResult (
  sourceAbsolutePath: string | ResolvedPackage,
  destinationAbsolutePath: string | ResolvedPackage,
  $linkingStrategy?: LinkingStrategy,
): Promise<true | null | never> {
  const sourcePackage = typeof sourceAbsolutePath === 'object' ? sourceAbsolutePath : getPackageAtPath(sourceAbsolutePath)
  const destinationPackage = typeof destinationAbsolutePath === 'object' ? destinationAbsolutePath : getPackageAtPath(destinationAbsolutePath)
  if (sourcePackage == null || destinationPackage == null) return null
  const linkingStrategy = $linkingStrategy ?? getLinkingStrategyForPackage(sourcePackage)
  if (linkingStrategy == null) return null
  const applyTranspilationResultFn = strategyApplyResultFnMap[linkingStrategy]
  return applyTranspilationResultFn(sourcePackage, destinationPackage)
}

type ApplyTranspilationResultFn = (
  (sourcePackage: ResolvedPackage, destinationPackage: ResolvedPackage) => true | never | Promise<true | never>
)
