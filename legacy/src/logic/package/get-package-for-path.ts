import { getPackageDepedencyNamesForPath } from './get-package-dependency-names-for-path'
import { getPackageJsonForPath } from './get-package-json-for-path'
import { getPackageNameByPath } from './get-package-name-by-path'

export function getPackageForPath (absolutePath: string): LinkablePackage | null {
  const packageJson = getPackageJsonForPath(absolutePath, true)
  if (!packageJson) return null
  const name = getPackageNameByPath(absolutePath, true)
  if (!name) return null
  const dependencyNames = getPackageDepedencyNamesForPath(packageJson)
  if (!dependencyNames) return null
  return { name, absolutePath, dependencyNames }
}

export interface LinkablePackage {
  name: string
  absolutePath: string
  dependencyNames: string[]
}

