import { afterEach, describe, it, vi } from 'vitest'
import path from 'path'
import fs from 'fs'
import * as GetPackageAtPathModule from '../../../src/core/get-package-at-path'
import { applyTranspilationResult } from '../../../src/core/apply-transpilation-result'
import * as GetLinkingStrategyForPackageModule from '../../../src/core/get-linking-strategy-for-package'

describe.concurrent('applyTranspilationResult', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return null if there is no package at specified source package path', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockImplementation((absolutePath) => {
        if (absolutePath === 'dest_path') {
          return { absolutePath: 'dest_path', packageJson: { name: 'dest' } }
        }
        return null
      })
    const result = applyTranspilationResult('source_path', 'dest_path', 'TRANSPILED')
    expect(result).toEqual(null)
  })

  it('should return null if there is no package at specified dest package path', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockImplementation((absolutePath) => {
        if (absolutePath === 'source_path') {
          return { absolutePath: 'source_path', packageJson: { name: 'dest' } }
        }
        return null
      })
    const result = applyTranspilationResult('source_path', 'dest_path', 'TRANSPILED')
    expect(result).toEqual(null)
  })

  it('should return null if linking strategy cannot be identified for source package', ({ expect }) => {
    vi.spyOn(GetLinkingStrategyForPackageModule, 'getLinkingStrategyForPackage')
      .mockReturnValueOnce(null)
    const result = applyTranspilationResult(
      { absolutePath: 'source_path', packageJson: { name: 'source' } },
      { absolutePath: 'dest_path', packageJson: { name: 'dest' } },
    )
    expect(result).toEqual(null)
  })

  it('should properly apply transpilation result for strategy: TRANSPILED', ({ expect }) => {
    const rmSyncSpy = vi.spyOn(fs, 'rmSync').mockReturnValueOnce(void 0)
    const cpSyncSpy = vi.spyOn(fs, 'cpSync').mockReturnValueOnce(void 0)
    const result = applyTranspilationResult(
      { absolutePath: 'source_path', packageJson: { name: 'source' } },
      { absolutePath: 'dest_path', packageJson: { name: 'dest' } },
      'TRANSPILED',
    )
    expect(result).toEqual(true)
    expect(rmSyncSpy.mock.lastCall).toEqual([
      path.resolve('dest_path', 'node_modules/source/dist'),
      { recursive: true },
    ])
    expect(cpSyncSpy.mock.lastCall).toEqual([
      path.resolve('source_path', 'dist'),
      path.resolve('dest_path', 'node_modules/source/dist'),
      { recursive: true },
    ])
  })

  it('should properly apply transpilation result for strategy: TRANSPILED_LEGACY', ({ expect }) => {
    const rmSyncSpy = vi.spyOn(fs, 'rmSync').mockReturnValueOnce(void 0)
    const cpSyncSpy = vi.spyOn(fs, 'cpSync').mockReturnValueOnce(void 0)
    const result = applyTranspilationResult(
      { absolutePath: 'source_path', packageJson: { name: 'source' } },
      { absolutePath: 'dest_path', packageJson: { name: 'dest' } },
      'TRANSPILED_LEGACY',
    )
    expect(result).toEqual(true)
    expect(rmSyncSpy.mock.lastCall).toEqual([
      path.resolve('dest_path', 'node_modules/source/dist'),
      { recursive: true },
    ])
    expect(cpSyncSpy.mock.lastCall).toEqual([
      path.resolve('source_path', 'dist'),
      path.resolve('dest_path', 'node_modules/source/dist'),
      { recursive: true },
    ])
  })

  it('should properly apply transpilation result for strategy: MAKEFILE_BUILD', ({ expect }) => {
    const rmSyncSpy = vi.spyOn(fs, 'rmSync').mockReturnValueOnce(void 0)
    const cpSyncSpy = vi.spyOn(fs, 'cpSync').mockReturnValueOnce(void 0)
    const result = applyTranspilationResult(
      { absolutePath: 'source_path', packageJson: { name: 'source' } },
      { absolutePath: 'dest_path', packageJson: { name: 'dest' } },
      'MAKEFILE_BUILD',
    )
    expect(result).toEqual(true)
    expect(rmSyncSpy.mock.lastCall).toEqual([
      path.resolve('dest_path', 'node_modules/source/dist'),
      { recursive: true },
    ])
    expect(cpSyncSpy.mock.lastCall).toEqual([
      path.resolve('source_path', 'dist'),
      path.resolve('dest_path', 'node_modules/source/dist'),
      { recursive: true },
    ])
  })

  it('should properly apply transpilation result for strategy: AMEND_NATIVE', ({ expect }) => {
    const rmSyncSpy = vi.spyOn(fs, 'rmSync').mockReturnValue(void 0)
    const cpSyncSpy = vi.spyOn(fs, 'cpSync').mockReturnValue(void 0)
    const result = applyTranspilationResult(
      { absolutePath: 'source_path', packageJson: { name: 'source' } },
      { absolutePath: 'dest_path', packageJson: { name: 'dest' } },
      'AMEND_NATIVE',
    )
    expect(result).toEqual(true)
    expect(rmSyncSpy.mock.calls).toEqual([
      [
        path.resolve('dest_path', 'node_modules/source/amend'),
        { recursive: true },
      ],
      [
        path.resolve('dest_path', 'node_modules/source/boundaries'),
        { recursive: true },
      ],
      [
        path.resolve('dest_path', 'node_modules/source/lib'),
        { recursive: true },
      ],
    ])
    expect(cpSyncSpy.mock.calls).toEqual([
      [
        path.resolve('source_path', 'amend'),
        path.resolve('dest_path', 'node_modules/source/amend'),
        { recursive: true },
      ],
      [
        path.resolve('source_path', 'boundaries'),
        path.resolve('dest_path', 'node_modules/source/boundaries'),
        { recursive: true },
      ],
      [
        path.resolve('source_path', 'lib'),
        path.resolve('dest_path', 'node_modules/source/lib'),
        { recursive: true },
      ],
    ])
  })

})
