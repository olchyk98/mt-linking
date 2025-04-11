import fs from 'fs'
import { type ResolvedPackage, getPackageAtPath } from './get-package-at-path'

/**
 * Returns type of the workspace for the specified package,
 * currently supported "pnpm" and "yarn" workspaces.
 *
 * The function will return null if the specified path
 * doesn't lead to a valid package.
 *
 * The function will return null if the specified path
 * doesn't lead to a folder containing ROOT package.json.
 * */
export function getWorkspaceType (absolutePath: string): WorkspaceType | null
export function getWorkspaceType (resolvedPackage: ResolvedPackage): WorkspaceType | null
export function getWorkspaceType (absolutePath: ResolvedPackage | string): WorkspaceType | null {
  const resolvedPackage = typeof absolutePath === 'object'
    ? absolutePath
    : getPackageAtPath(absolutePath)
  if (resolvedPackage == null) return null
  // XXX: Yarn workspaces case
  if (Array.isArray(resolvedPackage.packageJson.workspaces)) {
    return 'yarn'
  }
  // XXX: PNPM workspaces case
  const folderItems = fs.readdirSync(resolvedPackage.absolutePath)
  if (folderItems.includes('pnpm-workspace.yaml')) {
    return 'pnpm'
  }
  return null
}

export type WorkspaceType =
  | 'pnpm'
  | 'yarn'
