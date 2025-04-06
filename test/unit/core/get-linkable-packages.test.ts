import { afterEach, describe, it, vi } from 'vitest'
import fs, { Dirent } from 'fs'
import path from 'path'
import * as GetPackageAtPathModule from '../../../src/core/get-package-at-path'
import { LINKS_LOCATION } from '../../../src/constants'
import { getLinkablePackages } from '../../../src/core'

describe.concurrent('getLinkablePackages', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return an empty array if specified root path has no items', ({ expect }) => {
    vi.spyOn(fs, 'readdirSync').mockReturnValueOnce([])
    const result = getLinkablePackages()
    expect(result).toStrictEqual([])
  })

  it('should resolve single level hierarchy of links', ({ expect }) => {
    vi.spyOn(fs, 'readdirSync')
      .mockReturnValueOnce([
        'package1',
        'package2',
        'package3',
        'package4',
        // FIXME: Cause we can't select overload here.
      ] as unknown as Dirent[])
    vi.spyOn(fs, 'lstatSync')
      .mockImplementation((inputPath) => (
        {
          [path.resolve(LINKS_LOCATION, 'package1')]: {
            isFile: () => false,
            isSymbolicLink: () => true,
          },
          [path.resolve(LINKS_LOCATION, 'package2')]: { isFile: () => true },
          [path.resolve(LINKS_LOCATION, 'package3')]: null,
          [path.resolve(LINKS_LOCATION, 'package4')]: {
            isFile: () => false,
            isSymbolicLink: () => true,
          },
        }[inputPath.toString()] as fs.Stats
      ))
    vi.spyOn(fs, 'readlinkSync')
      .mockImplementation((fullItemPath) => fullItemPath.toString())
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockImplementation((packagePath) => (
        {
          [path.resolve(LINKS_LOCATION, 'package1')]: {
            absolutePath: 'package1',
            packageJson: { name: 'package1' },
          },
          [path.resolve(LINKS_LOCATION, 'package4')]: {
            absolutePath: 'package4',
            packageJson: { name: 'package4' },
          },
        }[packagePath]
      ))
    const result = getLinkablePackages()
    expect(result).toStrictEqual([
      { absolutePath: 'package1', packageJson: { name: 'package1' } },
      { absolutePath: 'package4', packageJson: { name: 'package4' } },
    ])
  })

  it('should resolve nested level hierarchy of links', ({ expect }) => {
    // XXX: Define files within individual folder
    vi.spyOn(fs, 'readdirSync')
      .mockImplementation((input) => {
        if (input === LINKS_LOCATION) {
        // FIXME: Cause we can't select overload here.
          return [ 'fol2', 'fol3', 'package1' ] as unknown as Dirent[]
        }
        if (input === path.resolve(LINKS_LOCATION, 'fol2')) {
        // FIXME: Cause we can't select overload here.
          return [ 'package4' ] as unknown as Dirent[]
        }
        if (input === path.resolve(LINKS_LOCATION, 'fol3')) {
        // FIXME: Cause we can't select overload here.
          return [ 'package5' ] as unknown as Dirent[]
        }
        return []
      })
    // XXX: Define symlink specs
    vi.spyOn(fs, 'lstatSync')
      .mockImplementation((inputPath) => (
        {
          [path.resolve(LINKS_LOCATION, 'package1')]: {
            isFile: () => false,
            isSymbolicLink: () => true,
          },
          [path.resolve(LINKS_LOCATION, 'fol2')]: {
            isFile: () => false,
            isSymbolicLink: () => false,
          },
          [path.resolve(LINKS_LOCATION, 'fol3')]: {
            isFile: () => false,
            isSymbolicLink: () => false,
          },
          [path.resolve(LINKS_LOCATION, 'fol2', 'package4')]: {
            isFile: () => false,
            isSymbolicLink: () => true,
          },
          [path.resolve(LINKS_LOCATION, 'fol3', 'package5')]: {
            isFile: () => false,
            isSymbolicLink: () => true,
          },
        }[inputPath.toString()] as fs.Stats
      ))
    vi.spyOn(fs, 'readlinkSync')
      .mockImplementation((fullItemPath) => fullItemPath.toString())
    // XXX: Define resolved packages
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockImplementation((packagePath) => (
        {
          [path.resolve(LINKS_LOCATION, 'package1')]: {
            absolutePath: 'package1',
            packageJson: { name: 'package1' },
          },
          [path.resolve(LINKS_LOCATION, 'fol2', 'package4')]: {
            absolutePath: 'package4',
            packageJson: { name: 'package4' },
          },
          [path.resolve(LINKS_LOCATION, 'fol3', 'package5')]: {
            absolutePath: 'package5',
            packageJson: { name: 'package5' },
          },
        }[packagePath]
      ))
    const result = getLinkablePackages()
    expect(result).toStrictEqual([
      { absolutePath: 'package4', packageJson: { name: 'package4' } },
      { absolutePath: 'package5', packageJson: { name: 'package5' } },
      { absolutePath: 'package1', packageJson: { name: 'package1' } },
    ])
  })
})
