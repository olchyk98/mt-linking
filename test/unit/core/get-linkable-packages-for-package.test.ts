import { afterEach, describe, it, vi } from 'vitest'
import * as GetPackageAtPathModule from '../../../src/core/get-package-at-path'
import * as GetLinkablePackagesModule from '../../../src/core/get-linkable-packages'
import { getLinkablePackagesForPackage } from '../../../src/core/get-linkable-packages-for-package'

describe.concurrent('getLinkablePackagesForPackage', () => {
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

})
