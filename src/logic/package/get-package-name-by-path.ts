import { propOr } from 'ramda'
import { PackageJson, getPackageJsonForPath } from './get-package-json-for-path'
import { isPromise } from '../../utils'

const takeNameOrNullFromPackageJson = (packageJson: PackageJson): string | null => (
  propOr(null, 'name', packageJson)
)

/**
* -----
* Pulls package name by picking package.json from the
* specified directory. If the path does not exist
* or does not include a package.json, null pointer will
* be returned.
*
* The specified "packagePath" has to be absolute.
* */
export function getPackageNameByPath (packagePath: string | PackageJson, sync: false): Promise<string | null>
export function getPackageNameByPath (packagePath: string | PackageJson, sync: true): string | null
export function getPackageNameByPath (packagePath: string | PackageJson, sync: boolean): string | null | Promise<string | null>
export function getPackageNameByPath (packagePath: string | PackageJson, sync: boolean): string | null | Promise<string | null> {
  const packageJson = typeof packagePath === 'object'
    ? packagePath
    : getPackageJsonForPath(packagePath, sync)
  return isPromise<PackageJson>(packageJson)
    ? packageJson.then(takeNameOrNullFromPackageJson)
    : takeNameOrNullFromPackageJson(packageJson as PackageJson)
}
