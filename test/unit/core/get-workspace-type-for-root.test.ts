import { getWorkspaceTypeForRoot } from '../../../src/core'
import fs, { Dirent } from 'fs'
import * as GetPackageAtPathModule from '../../../src/core/get-package-at-path'
import { afterEach, describe, it, vi } from 'vitest'

describe.concurrent('getWorkspaceTypeForRoot', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return null if input path does not lead to a package', ({ expect }) => {
    vi.spyOn(fs, 'readdirSync')
      .mockReturnValueOnce([])
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce(null)
    const result = getWorkspaceTypeForRoot('some_path')
    expect(result).toEqual(null)
  })

  it('should return null if package is not a workspace root', ({ expect }) => {
    const result = getWorkspaceTypeForRoot({
      absolutePath: 'some_path',
      packageJson: { name: 'some_package' },
    })
    expect(result).toEqual(null)
  })

  it('should properly match workspace root type: yarn', ({ expect }) => {
    const result = getWorkspaceTypeForRoot({
      absolutePath: 'some_path',
      packageJson: {
        name: 'some_package',
        workspaces: [ 'a', 'b' ],
      },
    })
    expect(result).toEqual('yarn')
  })

  it('should properly match workspace root type: pnpm', ({ expect }) => {
    vi.spyOn(fs, 'readdirSync')
      // FIXME: Cause we can't select overload here.
      .mockReturnValueOnce([ 'a', 'pnpm-workspace.yaml', 'b' ] as unknown as Dirent[])
    const result = getWorkspaceTypeForRoot({
      absolutePath: 'some_path',
      packageJson: { name: 'some_package' },
    })
    expect(result).toEqual('pnpm')
  })
})
