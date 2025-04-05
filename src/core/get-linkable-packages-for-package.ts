import { filter } from 'ramda'
import { getLinkablePackages } from './get-linkable-packages'
import { type ResolvedPackage, getPackageAtPath } from './get-package-at-path'

/**
 * Returns list of all PackageJSON structs (potentially customized),
 * that are available for linking and are refeferenced by the
 * destination package, either in "dependencies" or "devDependencies".
 * Helpful, if you're trying to obtain a list
 * of packages that the destination package can be linked to.
 *
 * Returns null if no PackageJSON could be obtained at
 * the specified absolutePath. Absolute path can either
 * end with "package.json" or just point to a folder
 * containing the "package.json" file.
 *
 * Also, returns null if "package.json" file was
 * found at the location, but the name field is
 * not specified.
 * */
export function getLinkablePackagesForPackage(absolutePath: string): ResolvedPackage[] | null
export function getLinkablePackagesForPackage(absolutePath: ResolvedPackage): ResolvedPackage[]
export function getLinkablePackagesForPackage (absolutePath: string | ResolvedPackage): ResolvedPackage[] | null {
  const destinationPackage = typeof absolutePath === 'object'
    ? absolutePath
    : getPackageAtPath(absolutePath)
  if (destinationPackage?.packageJson?.name == null) return null
  const { dependencies = {}, devDependencies = {} } = destinationPackage.packageJson
  const linkablePackages = getLinkablePackages()
  return filter(
    ({ packageJson: { name } }) => {
      if (name == null) return false
      return name in dependencies || name in devDependencies
    },
    linkablePackages,
  )
}
