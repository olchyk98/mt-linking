import path from 'path'
import * as yaml from 'yaml'
import fs from 'fs'
import { ResolvedPackage, getPackageAtPath } from './get-package-at-path'
import { WorkspaceType, getWorkspaceTypeForRoot } from './get-workspace-type-for-root'
import { globMatch, stripSuffix } from '../utils'

/**
* Taking list of relative paths to packages within workspaces
* that are usually defined with entries like these:
*
* The function appends package.json (which marks root of a package)
* to each entry and tries to recursively find all packages in the workspace.
*
* After package.json files have been found, the function returns their location,
* but without the "package.json" part. With this special approach we're able
* to get absolute paths to each individual package within the workspace.
* */
function resolvePackageRoots (resolvedPackage: ResolvedPackage, paths: string[]): string[] {
  const relativePackageJsonPaths = paths.map((entry) => (
    path.resolve(entry, './**/package.json')
  ))
  return globMatch(relativePackageJsonPaths, { cwd: resolvedPackage.absolutePath })
    .map((entry) => stripSuffix(entry, 'package.json'))
}

function getForYarn (resolvedPackage: ResolvedPackage): string[] {
  const workspaces = resolvedPackage.packageJson.workspaces
  if (!Array.isArray(workspaces)) return []
  return resolvePackageRoots(resolvedPackage, workspaces)
}

function getForPNPM (resolvedPackage: ResolvedPackage): string[] {
  const workspaceFilePath = path.resolve(resolvedPackage.absolutePath, 'pnpm-workspace.yaml')
  const workspaceFileYaml = fs.readFileSync(workspaceFilePath, 'utf8')
  const workspaceFile = yaml.parse(workspaceFileYaml) as { packages?: string[] }
  const packages = workspaceFile.packages ?? []
  return resolvePackageRoots(resolvedPackage, packages)
}

/**
 * Accepting input package and workspace type the function will
 * resolve paths to all child packages that are part of the
 * current workspace.
 *
 * The function will return null if input path doesn't lead to a valid package.
 *
 * The function will return null if the specified path
 * doesn't lead to a folder containing ROOT package.json.
 *
 * The function will return null if the specified path doesn't
 * reference a CONVENTIONAL workspace environment:
 *  - for yarn workspaces, it's expected that "packageJson.workspaces" is of type "string[]"
 *  - for pnpm workspaces, it's expected that "pnpm-workspace.yaml" is of type "{ packages: string[] }"
 * */
export function getChildPackagePathsForWorkspace (absolutePath: string): string[] | null
export function getChildPackagePathsForWorkspace (absolutePath: string, workspaceType: WorkspaceType): string[] | null
export function getChildPackagePathsForWorkspace (resolvedPackage: ResolvedPackage): string[] | null
export function getChildPackagePathsForWorkspace (resolvedPackage: ResolvedPackage, workspaceType: WorkspaceType): string[]
export function getChildPackagePathsForWorkspace (absolutePath: ResolvedPackage | string, $workspaceType?: WorkspaceType): string[] | null {
  const resolvedPackage = typeof absolutePath === 'object' ? absolutePath : getPackageAtPath(absolutePath)
  if (resolvedPackage == null) return null
  const workspaceType = typeof $workspaceType === 'string' ? $workspaceType : getWorkspaceTypeForRoot(resolvedPackage)
  if (workspaceType == null) return null
  if (workspaceType === 'yarn') {
    return getForYarn(resolvedPackage)
  }
  if (workspaceType === 'pnpm') {
    return getForPNPM(resolvedPackage)
  }
  return []
}
