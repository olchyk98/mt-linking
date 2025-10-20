import path from 'path'
import { error, globMatch, logAsLinker, stripSuffix, warnAsLinker } from '../../utils'
import { getChildPackagePathsForWorkspace, getPackageAtPath, getWorkspaceTypeForRoot, learnPackage } from '../../core'
import { errorRenderers } from '../../errors'

function getPathsToLearn (inputPattern?: string): string[] {
  const cwd = process.cwd()
  if (inputPattern != null) {
    return globMatch(`${stripSuffix(inputPattern, '/')}/package.json`, { cwd })
      .map((s) => path.resolve(s))
  }
  // XXX: Case for adding all packages in a workspace
  const workspaceType = getWorkspaceTypeForRoot(cwd)
  if (workspaceType != null) {
    const childPaths = getChildPackagePathsForWorkspace(cwd, workspaceType)
    if (childPaths == null || childPaths.length <= 0) {
      error(errorRenderers.WORKSPACE_HAS_NO_PACKAGES_TO_LEARN())
    }
    return childPaths
  }
  return [ cwd ]
}

export async function commandLearnHandler (pattern?: string) {
  const paths = getPathsToLearn(pattern)
  if (pattern != null) {
    logAsLinker(`Found ${paths.length} package(s).`)
  }
  let learned = 0
  for (const pathToLearn of paths) {
    const packageToLink = getPackageAtPath(pathToLearn)
    if (packageToLink == null) {
      warnAsLinker(`Could not learn package at path ${pathToLearn}: not a valid package (1)`)
      continue
    }
    learnPackage(packageToLink)
    logAsLinker(`"${packageToLink.packageJson.name}" has been learned!`)
    learned += 1
  }
  if (paths.length === 0) {
    logAsLinker('No packages to link')
  } else if (paths.length > 1) {
    logAsLinker(`Successfully learned ${learned} packages out of ${paths.length}`)
  }

}
