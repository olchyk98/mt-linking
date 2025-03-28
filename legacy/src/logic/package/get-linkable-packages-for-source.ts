import { filter, isNil } from 'ramda'
import { getPackageNameByPath } from './get-package-name-by-path'
import { getLinkablePackages } from './get-linkable-packages'
import { LinkablePackage } from './get-package-for-path'

/**
* -----
* Returns package names from "yarn link" registry,
* which include the specified package as a dependency.
*
* If package.json could not be loaded from the source
* absolute path for some, the function will return null.
*
* If none of the packages in "yarn link" registry
* depend on the source package, the function
* will output an empty array.
* */
export function getLinkablePackagesForSource (packageAbsolutePath: string): LinkablePackage[] | null {
  const packageName = getPackageNameByPath(packageAbsolutePath, true)
  if (isNil(packageName)) return null
  const knownPackages = getLinkablePackages()
  const packagesToLink = filter((l) => l.dependencyNames.includes(packageName), knownPackages)
  return packagesToLink
}
