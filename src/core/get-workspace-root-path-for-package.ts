import path from 'path'
import { getChildPackagePathsForWorkspace } from './get-child-packages-paths-for-workspace'

const MAX_ROOT_DEPTH = 5

/**
 * Accepting absolutePath to any package in the workspace
 * or to the root of the workspace, returns path to the
 * root of the workspace that the package is in.
 *
 * To find workspace root for specified child
 * package, the function will navigate up to
 * 5 ("MAX_ROOT_DEPTH") folders upwards to find the
 * root package.json. The function will also verify
 * that package.json references referenced package.
 *
 * This function will return null if specified path
 * doesn't lead to a valid package.
 *
 * This function will return null if referenced
 * package doesn't belong to any type of
 * supported workspace (see union "WorkspaceType" to see
 * which workspaces are supported).
 * */
export function getWorkspaceRootPathForPackage (
  absolutePath: string,
  currentPath = absolutePath,
  depthLeft = MAX_ROOT_DEPTH,
): string | null {
  if (depthLeft <= 0) return null
  const workspacePackagePaths = getChildPackagePathsForWorkspace(currentPath)
  if (workspacePackagePaths != null) {
    // XXX: Handling case when input is workspace root.
    if (absolutePath === currentPath) return currentPath
    // XXX: Handling case when we have successfully traversed
    // to the workspace root folder.
    if (workspacePackagePaths?.includes(absolutePath)) return currentPath
  }
  const nextPath = path.dirname(currentPath)
  return getWorkspaceRootPathForPackage(absolutePath, nextPath, depthLeft - 1)
}
