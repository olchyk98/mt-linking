import fs from 'fs'
import path from 'path'
import { type LinkingStrategy, getLinkingStrategyForPackage } from './get-linking-strategy-for-package'
import { type ResolvedPackage, getPackageAtPath } from './get-package-at-path'

function resolveNodeModulesLocationForSource (source: ResolvedPackage, destination: ResolvedPackage): string | never {
  const packageName = source.packageJson.name
  return path.resolve(destination.absolutePath, 'node_modules', packageName)
}

const copyDistForLink: ApplyTranspilationResultFn = (source, destination) => {
  const dist = path.resolve(source.absolutePath, 'dist')
  const dest = path.resolve(resolveNodeModulesLocationForSource(source, destination), 'dist')
  fs.rmSync(dest, { recursive: true })
  fs.cpSync(dist, dest, { recursive: true })
  return true
}

const copyAmendSourcesForLink: ApplyTranspilationResultFn = (source, destination) => {
  const targets = [ 'amend', 'boundaries', 'lib' ]
  const destBase = resolveNodeModulesLocationForSource(source, destination)
  for (const target of targets) {
    const dist = path.resolve(source.absolutePath, target)
    const dest = path.resolve(destBase, target)
    fs.rmSync(dest, { recursive: true })
    fs.cpSync(dist, dest, { recursive: true })
  }
  return true
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
export function applyTranspilationResult (
  sourceAbsolutePath: string | ResolvedPackage,
  destinationAbsolutePath: string | ResolvedPackage,
  $linkingStrategy?: LinkingStrategy,
): true | null | never {
  const sourcePackage = typeof sourceAbsolutePath === 'object' ? sourceAbsolutePath : getPackageAtPath(sourceAbsolutePath)
  const destinationPackage = typeof destinationAbsolutePath === 'object' ? destinationAbsolutePath : getPackageAtPath(destinationAbsolutePath)
  if (sourcePackage == null || destinationPackage == null) return null
  const linkingStrategy = $linkingStrategy ?? getLinkingStrategyForPackage(sourcePackage)
  if (linkingStrategy == null) return null
  const applyTranspilationResultFn = strategyApplyResultFnMap[linkingStrategy]
  return applyTranspilationResultFn(sourcePackage, destinationPackage)
}

type ApplyTranspilationResultFn = (
  (sourcePackage: ResolvedPackage, destinationPackage: ResolvedPackage) => true | never
)
