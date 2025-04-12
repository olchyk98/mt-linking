import { afterEach, describe, it, vi } from 'vitest'
import * as GetChildPackagePathsForWorkspace from '../../../src/core/get-child-packages-paths-for-workspace'
import { getWorkspaceRootPathForPackage } from '../../../src/core'

describe.concurrent('getWorkspaceRootPathForPackage', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return null if package does not belong to workspace', ({ expect }) => {
    vi.spyOn(GetChildPackagePathsForWorkspace, 'getChildPackagePathsForWorkspace')
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValue(null)
    const result = getWorkspaceRootPathForPackage('some_package')
    expect(result).toEqual(null)
  })

  it('should return null if package is within workspace folder structure, but not referenced by workspace root config', ({ expect }) => {
    vi.spyOn(GetChildPackagePathsForWorkspace, 'getChildPackagePathsForWorkspace')
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      .mockReturnValue([ 'a', 'b', 'c' ])
    const result = getWorkspaceRootPathForPackage('some_package')
    expect(result).toEqual(null)
  })

  it('should return null when input is 10 levels down in depth', ({ expect }) => {
    vi.spyOn(GetChildPackagePathsForWorkspace, 'getChildPackagePathsForWorkspace')
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
    const result = getWorkspaceRootPathForPackage('some_package')
    expect(result).toEqual(null)
  })

  it('should return input path when input is root', ({ expect }) => {
    vi.spyOn(GetChildPackagePathsForWorkspace, 'getChildPackagePathsForWorkspace')
      .mockImplementationOnce((c) => {
        if ((c as unknown as string) === 'root') {
          return [ 'root/a', 'root/b', 'root/c' ]
        }
        return null as unknown as string[]
      })
    const result = getWorkspaceRootPathForPackage('root')
    expect(result).toEqual('root')
  })

  it('should return paths when input is 3 levels down in depth', ({ expect }) => {
    vi.spyOn(GetChildPackagePathsForWorkspace, 'getChildPackagePathsForWorkspace')
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      // @ts-expect-error faulty type detection, because of overloads.
      .mockReturnValueOnce(null)
      .mockImplementationOnce((c) => {
        if ((c as unknown as string) === 'root') {
          return [ 'root/a', 'root/nested/some_package' ]
        }
        return null as unknown as string[]
      })
    const result = getWorkspaceRootPathForPackage('root/nested/some_package')
    expect(result).toEqual('root')
  })
})
