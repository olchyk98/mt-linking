import { propOr } from 'ramda'
import { PackageJson, getPackageJsonForPath } from './get-package-json-for-path'

/**
* -----
* Pulls package name by picking package.json from the
* specified directory. If the path does not exist
* or does not include a package.json, null pointer will
* be returned.
*
* The specified "packagePath" has to be absolute.
* */
export function getPackageNameByPath (packagePath: string | PackageJson): string | null {
  const packageJson = typeof packagePath === 'object'
    ? packagePath
    : getPackageJsonForPath(packagePath)
  return propOr(null, 'name', packageJson)
}
