import { filter, has, reduce } from 'ramda'
import { getLinkablePackages } from './get-linkable-packages'
import { type ResolvedPackage, getPackageAtPath } from './get-package-at-path'
import { WorkspaceType, getWorkspaceType } from './get-workspace-type'
import { getChildPackagePathsForWorkspace } from './get-child-packages-paths-for-workspace'

function getLinkablePackagesForWorkspace (destinationPackage: ResolvedPackage, workspaceType: WorkspaceType): ResolvedPackage[] {
  // XXX: 1. Compile lookup table for all workspace packages.
  // The function fetches linkable packages for each individual workspace package.
  // This is also needed to remove those from "linkablePackages" list later.
  const workspacePackagePaths = getChildPackagePathsForWorkspace(destinationPackage, workspaceType)
  const workspacePackagesMap = reduce<string, Record<string, ResolvedPackage>>((acc, childPath) => {
    const resolvedPackage = getPackageAtPath(childPath)
    if (resolvedPackage != null) {
      acc[resolvedPackage.packageJson.name] = resolvedPackage
    }
    return acc
  }, {}, workspacePackagePaths)
  // XXX: 2. We construct a list (here it is a map for performance reasons) of all packages
  // that are linkable to ANY package in the workspace.
  // We remove duplicates and we also remove packages that are within the workspace itself.
  const packagesMap = reduce<ResolvedPackage, Record<string, ResolvedPackage>>((acc, childPackage) => {
    // FIXME: Calling "getLinkablePackagesForPackage" here is expensive,
    // because it calls "getLinkablePackages" function which makes FS call.
    // Break out needed comparison logic into another function and call
    // "getLinkablePackages" here - only once.
    const linkablePackages = getLinkablePackagesForPackage(childPackage) ?? []
    // XXX: We have the map here to be able to quickly deduplicate packages.
    linkablePackages.forEach((linkablePackage) => {
      // XXX: Packages in the workspace may depend on each other. We ignore those.
      if (!has(linkablePackage.packageJson.name, workspacePackagesMap)) {
        acc[linkablePackage.packageJson.name] = linkablePackage
      }
    }, linkablePackages)
    return acc
  }, {}, Object.values(workspacePackagesMap))
  // XXX: 3. Converting performance map to a list.
  return Object.values(packagesMap)
}

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
export function getLinkablePackagesForPackage (absolutePath: string): ResolvedPackage[] | null
export function getLinkablePackagesForPackage (absolutePath: ResolvedPackage): ResolvedPackage[]
export function getLinkablePackagesForPackage (absolutePath: string | ResolvedPackage): ResolvedPackage[] | null {
  const destinationPackage = typeof absolutePath === 'object'
    ? absolutePath
    : getPackageAtPath(absolutePath)
  if (destinationPackage?.packageJson?.name == null) return null
  // XXX: In case it's a workspace root, we want to get all
  // linkable packages for all its children.
  // Linking to entire workspace scenario.
  const potentialWorkspaceType = getWorkspaceType(destinationPackage)
  if (potentialWorkspaceType != null) {
    return getLinkablePackagesForWorkspace(destinationPackage, potentialWorkspaceType)
  }
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
