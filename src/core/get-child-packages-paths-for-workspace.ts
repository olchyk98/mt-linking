import path from 'path'
import * as yaml from 'yaml'
import fs from 'fs'
import { ResolvedPackage, getPackageAtPath } from './get-package-at-path'
import { WorkspaceType, getWorkspaceType } from './get-workspace-type'
import { globMatch } from '../utils'

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
  const workspaceType = typeof $workspaceType === 'string' ? $workspaceType : getWorkspaceType(resolvedPackage)
  if (workspaceType == null) return null
  if (workspaceType === 'yarn') {
    const workspaces = resolvedPackage.packageJson.workspaces
    if (!Array.isArray(workspaces)) return []
    return globMatch(workspaces as string[], { cwd: resolvedPackage.absolutePath })
  }
  if (workspaceType === 'pnpm') {
    const workspaceFilePath = path.resolve(resolvedPackage.absolutePath, 'pnpm-workspace.yaml')
    const workspaceFileYaml = fs.readFileSync(workspaceFilePath, 'utf8')
    const workspaceFile = yaml.parse(workspaceFileYaml) as { packages?: string[] }
    return globMatch(workspaceFile.packages ?? [], { cwd: resolvedPackage.absolutePath })
  }
  return []
}
