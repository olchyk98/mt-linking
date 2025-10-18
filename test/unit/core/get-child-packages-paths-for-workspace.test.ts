import { describe, it } from 'vitest'

describe.concurrent('getChildPackagePathsForWorkspace', () => {
  it('should return null if absolutePath does not lead to a valid package', () => {

  })

  it('should return null if specified package is not a workspace root', () => {

  })

  it('should return [] if workspace is defined a yarn, but package.json has no workspaces defined', () => {

  })

  it('should properly read packages for workspace type: yarn', () => {

  })

  it('should properly read packages for workspace type: pnpm', () => {

  })
})
