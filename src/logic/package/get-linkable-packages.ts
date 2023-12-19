import { append, reduce } from 'ramda'
import { LinkablePackage, getPackageForPath } from './get-package-for-path'
import { getLinkablePackagePaths } from './get-linkable-package-paths'

/**
* -----
* The purpose of this function
* is to fetch all packages
* registered registry with "yarn link"
* command.
* */
export function getLinkablePackages (): LinkablePackage[] {
  const absolutePaths = getLinkablePackagePaths()
  const linkablePackagesWithMeta = reduce(
    (acc, absolutePath) => {
      const linkablePackage = getPackageForPath(absolutePath)
      if (!linkablePackage) return acc
      return append(linkablePackage, acc)
    },
    <LinkablePackage[]> [],
    absolutePaths,
  )
  return linkablePackagesWithMeta
}
