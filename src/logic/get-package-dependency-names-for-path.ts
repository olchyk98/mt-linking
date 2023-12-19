import { keys, propOr } from 'ramda'
import { PackageJson, getPackageJsonForPath } from './get-package-json-for-path'

/**
* -----
* The function returns a list of
* dependency names parsed from
* the package.json for the specified
* absolutePath.
*
* If package.json could not be
* loaded or parsed, the function
* will return null.
* */
export function getPackageDepedencyNamesForPath (packagePath: string | PackageJson): string[] | null {
  const packageJson = typeof packagePath === 'object'
    ? packagePath
    : getPackageJsonForPath(packagePath)
  const dependencies = propOr(null, 'dependencies', packageJson)
  if (!dependencies) return null
  return keys(dependencies)
}
