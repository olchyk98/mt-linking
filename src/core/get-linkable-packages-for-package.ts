import { filter } from 'ramda'
import { getLinkablePackages } from './get-linkable-packages';
import { getPackageJSONAtPath, type PackageJson } from './get-package-json-at-path'

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
export function getLinkablePackagesForPackage(absolutePath: string | PackageJson): PackageJson[] | null {
  const sourcePackage = typeof absolutePath === 'object'
    ? absolutePath
    : getPackageJSONAtPath(absolutePath)
  if (sourcePackage?.name == null) return null
  const { dependencies = {}, devDependencies = {} } = sourcePackage
  const linkablePackages = getLinkablePackages()
  return filter(({ name }) => {
    if (name == null) return false
    return name in dependencies || name in devDependencies
  }, linkablePackages)
}
