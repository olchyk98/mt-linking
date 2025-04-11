import fs from 'fs'
import { afterEach, describe, it, vi } from 'vitest'
import * as GetPackageAtPathModule from '../../../src/core/get-package-at-path'
import { learnPackage } from '../../../src/core'
import path from 'path'
import { LINKS_LOCATION } from '../../../src/constants'

describe.concurrent('learnPackage', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return null if specified absolutePath does not lead to a valid package', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce(null)
    const result = learnPackage('some_path')
    expect(result).toEqual(null)
  })

  it('should properly save specified package in links collection', ({ expect }) => {
    const mkdirSyncSpy = vi.spyOn(fs, 'mkdirSync').mockResolvedValueOnce(void 0)
    const rmSyncSpy = vi.spyOn(fs, 'rmSync').mockResolvedValueOnce(void 0)
    const symlinkSyncSpy = vi.spyOn(fs, 'symlinkSync').mockResolvedValueOnce(void 0)
    const result = learnPackage({
      absolutePath: 'absolute_path_for_some_package',
      packageJson: { name: 'some_package' },
    })
    expect(result).toEqual(true)
    expect(mkdirSyncSpy.mock.lastCall).toEqual([
      LINKS_LOCATION,
      { recursive: true },
    ])
    expect(rmSyncSpy.mock.lastCall).toEqual([
      path.resolve(LINKS_LOCATION, 'some_package'),
      { recursive: true },
    ])
    expect(symlinkSyncSpy.mock.lastCall).toEqual([
      'absolute_path_for_some_package',
      path.resolve(LINKS_LOCATION, 'some_package'),
    ])
  })

  it('should properly save specified package from a workspace in links collection', ({ expect }) => {
    const mkdirSyncSpy = vi.spyOn(fs, 'mkdirSync').mockResolvedValueOnce(void 0)
    const rmSyncSpy = vi.spyOn(fs, 'rmSync').mockResolvedValueOnce(void 0)
    const symlinkSyncSpy = vi.spyOn(fs, 'symlinkSync').mockResolvedValueOnce(void 0)
    const result = learnPackage({
      absolutePath: 'absolute_path_for_some_package',
      packageJson: { name: '@workspace/some_package' },
    })
    expect(result).toEqual(true)
    expect(mkdirSyncSpy.mock.lastCall).toEqual([
      path.resolve(LINKS_LOCATION, '@workspace'),
      { recursive: true },
    ])
    expect(rmSyncSpy.mock.lastCall).toEqual([
      path.resolve(LINKS_LOCATION, '@workspace/some_package'),
      { recursive: true },
    ])
    expect(symlinkSyncSpy.mock.lastCall).toEqual([
      'absolute_path_for_some_package',
      path.resolve(LINKS_LOCATION, '@workspace/some_package'),
    ])
  })
})
