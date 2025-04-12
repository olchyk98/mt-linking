import { afterEach, describe, it, vi } from 'vitest'
import fs from 'fs'
import * as GlobMatchModule from '../../../src/utils/glob-match'
import * as GetPackageAtPathModule from '../../../src/core/get-package-at-path'
import * as GetWorkspaceTypeModule from '../../../src/core/get-workspace-type-for-root'
import { getChildPackagePathsForWorkspace } from '../../../src/core'

describe.concurrent('getChildPackagePathsForWorkspace', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return null if absolutePath does not lead to a valid package', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce(null)
    const result = getChildPackagePathsForWorkspace('some_path', 'yarn')
    expect(result).toEqual(null)
  })

  it('should return null if specified package is not a workspace root', ({ expect }) => {
    vi.spyOn(GetWorkspaceTypeModule, 'getWorkspaceTypeForRoot')
      .mockReturnValueOnce(null)
    const result = getChildPackagePathsForWorkspace(
      { absolutePath: 'some_path', packageJson: { name: 'a' } },
    )
    expect(result).toEqual(null)
  })

  it('should return [] if workspace is defined a yarn, but package.json has no workspaces defined', ({ expect }) => {
    const result = getChildPackagePathsForWorkspace(
      { absolutePath: 'some_path', packageJson: { name: 'a' } },
      'yarn',
    )
    expect(result).toEqual([])
  })

  it('should properly read packages for workspace type: yarn', ({ expect }) => {
    const globSyncSpy = vi.spyOn(GlobMatchModule, 'globMatch')
      .mockReturnValueOnce([ '1', '2', '3' ])
    const result = getChildPackagePathsForWorkspace(
      {
        absolutePath: 'some_path',
        packageJson: {
          name: 'a',
          workspaces: [ 'a', 'b', 'c' ],
        },
      },
      'yarn',
    )
    expect(result).toStrictEqual([ '1', '2', '3' ])
    expect(globSyncSpy.mock.lastCall).toStrictEqual([
      [ 'a', 'b', 'c' ],
      { cwd: 'some_path' },
    ])
  })

  it('should properly read packages for workspace type: pnpm', ({ expect }) => {
    vi.spyOn(fs, 'readFileSync')
      .mockReturnValueOnce(`
packages:
  - './a1'
  - './b2'
      `)
    const globSyncSpy = vi.spyOn(GlobMatchModule, 'globMatch')
      .mockReturnValueOnce([ '1', '2', '3' ])
    const result = getChildPackagePathsForWorkspace(
      {
        absolutePath: 'some_path',
        packageJson: { name: 'a' },
      },
      'pnpm',
    )
    expect(result).toStrictEqual([ '1', '2', '3' ])
    expect(globSyncSpy.mock.lastCall).toStrictEqual([
      [ './a1', './b2' ],
      { cwd: 'some_path' },
    ])
  })
})
