import { afterEach, beforeEach, describe, it, vi } from 'vitest'
import * as GetWorkspaceTypeModule from '../../../src/core/get-workspace-type-for-root'
import * as GetPackageAtPathModule from '../../../src/core/get-package-at-path'
import * as GetChildPackagePathsForWorkspace from '../../../src/core/get-child-packages-paths-for-workspace'
import * as GetLinkablePackagesModule from '../../../src/core/get-linkable-packages'
import { getLinkablePackagesForPackage } from '../../../src/core/get-linkable-packages-for-package'

describe.concurrent('getLinkablePackagesForPackage', () => {
  beforeEach(() => {
    vi.spyOn(GetWorkspaceTypeModule, 'getWorkspaceTypeForRoot')
      .mockReturnValueOnce(null)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return null if package at specified path cannot be resolved', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce(null)
    const result = getLinkablePackagesForPackage('some_path')
    expect(result).toEqual(null)
  })

  it('should return an empty array if there are no linkable packages', ({ expect }) => {
    vi.spyOn(GetLinkablePackagesModule, 'getLinkablePackages')
      .mockReturnValueOnce([])
    const result = getLinkablePackagesForPackage({
      absolutePath: '',
      packageJson: { name: 'some_package' },
    })
    expect(result).toEqual([])
  })

  it('should return linkable packages that are referenced in dest package.json', ({ expect }) => {
    vi.spyOn(GetLinkablePackagesModule, 'getLinkablePackages')
      .mockReturnValueOnce([
        { packageJson: { name: 'package1' } },
        { packageJson: { name: 'package2' } },
        { packageJson: { name: 'package3' } },
        { packageJson: { name: 'package4' } },
        { packageJson: { name: 'package5' } },
      ] as GetPackageAtPathModule.ResolvedPackage[])
    const result = getLinkablePackagesForPackage({
      absolutePath: '',
      packageJson: {
        name: 'dest_package',
        dependencies: { package1: '0.1.2', package2: '1.4.2' },
        devDependencies: { package4: '0.1.2', package5: '1.4.2' },
      },
    })
    expect(result).toEqual([
      { packageJson: { name: 'package1' } },
      { packageJson: { name: 'package2' } },
      { packageJson: { name: 'package4' } },
      { packageJson: { name: 'package5' } },
    ])
  })

  it('should properly extract all linkable packages for all packages in a workspace', ({ expect }) => {
    vi.spyOn(GetWorkspaceTypeModule, 'getWorkspaceTypeForRoot')
      .mockReturnValueOnce('yarn')
      .mockReturnValue(null)
    vi.spyOn(GetChildPackagePathsForWorkspace, 'getChildPackagePathsForWorkspace')
      .mockReturnValueOnce([ 'a', 'b', 'c', 'd' ])
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockImplementation((packagePath) => {
        const collection: Record<string, GetPackageAtPathModule.ResolvedPackage> = {
          a: {
            absolutePath: 'a',
            packageJson: {
              name: 'a',
              dependencies: {
                b: '0.0.1',
              },
            },
          },
          b: {
            absolutePath: 'b',
            packageJson: {
              name: 'b',
              dependencies: {
                external1: '0.0.1',
              },
            },
          },
          c: {
            absolutePath: 'c',
            packageJson: {
              name: 'c',
              dependencies: {
                external2: '0.0.1',
              },
            },
          },
          d: {
            absolutePath: 'd',
            packageJson: {
              name: 'd',
              dependencies: {
                b: '0.0.1',
                external2: '0.0.1',
              },
            },
          },
          external1: {
            absolutePath: 'external1',
            packageJson: {
              name: 'external1',
            },
          },
          external2: {
            absolutePath: 'external2',
            packageJson: {
              name: 'external2',
            },
          },
        }
        return collection[packagePath] ?? null
      })
    vi.spyOn(GetLinkablePackagesModule, 'getLinkablePackages')
      .mockReturnValueOnce([
        { absolutePath: 'a', packageJson: { name: 'a' } },
        { absolutePath: 'b', packageJson: { name: 'b' } },
        { absolutePath: 'c', packageJson: { name: 'c' } },
        { absolutePath: 'd', packageJson: { name: 'd' } },
        { absolutePath: 'external1', packageJson: { name: 'external1' } },
        { absolutePath: 'external2', packageJson: { name: 'external2' } },
      ])
    const result = getLinkablePackagesForPackage({
      absolutePath: 'source',
      packageJson: { name: 'source_package' },
    })
    expect(result).toStrictEqual([
      { absolutePath: 'external1', packageJson: { name: 'external1' } },
      { absolutePath: 'external2', packageJson: { name: 'external2' } },
    ])
  })
})
