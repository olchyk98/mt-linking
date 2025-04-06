import fs from 'fs'
import { afterEach, describe, it, vi } from 'vitest'
import { getPackageAtPath } from '../../../src/core/get-package-at-path'
import { IPackageJson as PackageJson } from 'package-json-type'
import path from 'path'

describe.concurrent('getPackageAtPath', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return null if no package.json exists at specified path', ({ expect }) => {
    vi.spyOn(fs, 'readFileSync').mockImplementationOnce(() => {
      throw new Error('UNKNOWN_FILE')
    })
    const result = getPackageAtPath('some_path')
    expect(result).toEqual(null)
  })

  it('should return null if package.json at specified path is not parsable', ({ expect }) => {
    vi.spyOn(fs, 'readFileSync').mockReturnValueOnce('some_unparsable_json_content')
    const result = getPackageAtPath('some_path')
    expect(result).toEqual(null)
  })

  it('should return null if package.json at specified path does not have name property', ({ expect }) => {
    vi.spyOn(fs, 'readFileSync').mockReturnValueOnce(
      JSON.stringify({ version: '0.0.1', description: 'Some package' }),
    )
    const result = getPackageAtPath('some_path')
    expect(result).toEqual(null)
  })

  it('should properly load and resolve package spec (path ends with dirname)', ({ expect }) => {
    const packageJson: PackageJson = {
      name: '@testspace/super-package',
      version: '0.0.1',
      description: 'Some package',
    }
    const dirPath = path.resolve('some_path')
    const readFileSyncSpy = vi.spyOn(fs, 'readFileSync')
      .mockImplementationOnce(
        (path) => {
          if (path === `${dirPath}/package.json`) {
            return JSON.stringify(packageJson)
          }
          throw new Error('UNKNOWN_FILE')
        },
      )
    const result = getPackageAtPath(dirPath)
    expect(result).toEqual({ absolutePath: dirPath, packageJson })
    expect(readFileSyncSpy.mock.lastCall?.[0]).toEqual(`${dirPath}/package.json`)
  })

  it('should properly load and resolve package spec (path ends with filename)', ({ expect }) => {
    const packageJson: PackageJson = {
      name: '@testspace/super-package',
      version: '0.0.1',
      description: 'Some package',
    }
    const dirPath = path.resolve('some_path/')
    const readFileSyncSpy = vi.spyOn(fs, 'readFileSync')
      .mockImplementationOnce(
        (path) => {
          if (path === `${dirPath}/package.json`) {
            return JSON.stringify(packageJson)
          }
          throw new Error('UNKNOWN_FILE')
        },
      )
    const result = getPackageAtPath(`${dirPath}/package.json`)
    expect(result).toEqual({ absolutePath: dirPath, packageJson })
    expect(readFileSyncSpy.mock.lastCall?.[0]).toEqual(`${dirPath}/package.json`)
  })
})
