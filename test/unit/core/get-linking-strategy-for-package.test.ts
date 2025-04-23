import { afterEach, describe, it, vi } from 'vitest'
import fs, { Dirent } from 'fs'
import * as GetPackageAtPathModule from '../../../src/core/get-package-at-path'
import { getLinkingStrategyForPackage } from '../../../src/core/get-linking-strategy-for-package'

describe.concurrent('getLinkingStrategyForPackage', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return null if package at specified path can not be resolved', ({ expect }) =>{
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce(null)
    const result = getLinkingStrategyForPackage('some_path')
    expect(result).toEqual(null)
  })

  it('should properly identify strategy: TRANSPILED', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce({ absolutePath: 'mypath', packageJson: { name: 'package' } })
    vi.spyOn(fs, 'readdirSync')
      .mockImplementationOnce(() => [
        'rollup.config.mjs',
        'package.json',
        'hello.txt',
        // FIXME: Cause we can't select overload here.
      ] as unknown as Dirent[])
    const result = getLinkingStrategyForPackage('mypath')
    expect(result).toEqual('TRANSPILED')
  })

  it('should properly identify strategy: TRANSPILED_LEGACY', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce({
        absolutePath: 'mypath',
        packageJson: {
          name: 'package',
          scripts: { build: '...' },
        },
      })
    vi.spyOn(fs, 'readdirSync').mockImplementationOnce(() => [])
    const result = getLinkingStrategyForPackage('mypath')
    expect(result).toEqual('TRANSPILED_LEGACY')
  })

  it('should properly identify strategy: AMEND_NATIVE', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce({ absolutePath: 'mypath', packageJson: { name: 'package' } })
    vi.spyOn(fs, 'readdirSync')
      .mockImplementationOnce(() => [
        'amend',
        'lib',
        'package.json',
        // FIXME: Cause we can't select overload here.
      ] as unknown as Dirent[])
    const result = getLinkingStrategyForPackage('mypath')
    expect(result).toEqual('AMEND_NATIVE')
  })

  it('should properly identify strategy: MAKEFILE_BUILD', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce({ absolutePath: 'mypath', packageJson: { name: 'package' } })
    vi.spyOn(fs, 'readdirSync')
      .mockImplementationOnce(() => [
        'Makefile',
        'lib',
        'package.json',
        // FIXME: Cause we can't select overload here.
      ] as unknown as Dirent[])
    const result = getLinkingStrategyForPackage('mypath')
    expect(result).toEqual('MAKEFILE_BUILD')
  })

  it('should properly identify strategy: NOBUILD_SOURCE', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce({ absolutePath: 'mypath', packageJson: { name: 'package' } })
    vi.spyOn(fs, 'readdirSync')
      .mockImplementationOnce(() => [
        'lib',
        'package.json',
        // FIXME: Cause we can't select overload here.
      ] as unknown as Dirent[])
    const result = getLinkingStrategyForPackage('mypath')
    expect(result).toEqual('NOBUILD_SOURCE')
  })
})
