import { afterEach, describe, expect, it, vi } from 'vitest'
import { getMockFs } from '../../mock-fs'
import { setupLoggerMockLifecycle } from '../../mock-logger'
import * as CommandLinkHandlerMod from '../../../src/commands'
import { errorRenderers } from '../../../src/errors'
import * as UtilsMod from '../../../src/utils'
import { setTimeout } from 'timers/promises'
import { Readable } from 'stream'
import path from 'path'

const { commandLinkHandler } = CommandLinkHandlerMod

describe('commandLinkHandler', () => {
  setupLoggerMockLifecycle()
  const mockFs = getMockFs()

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('current folder is not a package', () => {
    mockFs.env.linksRegistry.init()
    const promise = commandLinkHandler()
    const expected = new Error(errorRenderers.INSUFFICIENT_INFO_IN_DEST_PACKAGE_JSON())
    return expect(promise).rejects.toEqual(expected)
  })

  it('without node_modules in current package', () => {
    mockFs.env.linksRegistry.init()
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    const promise = commandLinkHandler()
    const expected = new Error(errorRenderers.PACKAGE_IS_NOT_INSTALLED())
    return expect(promise).rejects.toEqual(expected)
  })

  it('links registry does not exist', () => {
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.installDependenciesFor(process.cwd())
    const promise = commandLinkHandler()
    const expected = new Error(errorRenderers.NO_LINKABLE_PACKAGES_FOR_DEST())
    return expect(promise).rejects.toEqual(expected)
  })

  it('package in current directory has no dependencies', () => {
    mockFs.env.linksRegistry.init([ 'react', 'lodash', '@testspace/canary' ])
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.installDependenciesFor(process.cwd())
    const promise = commandLinkHandler()
    const expected = new Error(errorRenderers.NO_LINKABLE_PACKAGES_FOR_DEST())
    return expect(promise).rejects.toEqual(expected)
  })

  it('unknown source package (from)', () => {
    mockFs.env.linksRegistry.init([ 'react', 'lodash', '@testspace/canary' ])
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.updatePackageJson(process.cwd(), (old) => ({
      ...old,
      dependencies: {
        lodash: '^1.0.0',
        '@testspace/canary': '^1.0.0',
      },
    }))
    mockFs.env.packages.installDependenciesFor(process.cwd())
    const promise = commandLinkHandler('@testspace/unknown')
    const expected = new Error(errorRenderers.SPECIFIED_SOURCE_PACKAGE_IS_NOT_LINKABLE())
    return expect(promise).rejects.toEqual(expected)
  })

  it('no strategy available for selected package', () => {
    mockFs.env.linksRegistry.init([ 'react' ])
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.updatePackageJson(process.cwd(), (old) => ({
      ...old,
      dependencies: { react: '^1.0.0' },
    }))
    mockFs.env.packages.installDependenciesFor(process.cwd())
    const promise = commandLinkHandler('react')
    const expected = new Error(errorRenderers.NO_LINKING_STRATEGY_AVAILABLE_FOR_SOURCE())
    return expect(promise).rejects.toEqual(expected)
  })

  it('strategy: TRANSPILED', async () => {
    const [ { packagePath, packageName } ] = mockFs.env.linksRegistry.init([ 'react' ])
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.updatePackageJson(process.cwd(), (old) => ({ ...old, dependencies: { react: '^1.0.0' } }))
    mockFs.env.packages.installDependenciesFor(process.cwd())
    mockFs.env.packages.createFile(packagePath, 'rollup.config.mjs', '')
    const shellSpy = vi.spyOn(UtilsMod, 'executeShellWithStream').mockReturnValue(Readable.from(''))
    // XXX: Cannot run transpile, since we're in sandbox. Will have to manually stub transpilation result.
    mockFs.env.packages.createFolders(packagePath, [ 'dist', 'web', 'lib', 'unrelated' ])
    // XXX: This is not async, and pipes into stdout, so have to manually wait for X amount of time,
    await commandLinkHandler('react')
    // NOTE: Since transpilation is stubbed, this value can be pretty low.
    // Just have to wait out a few event loop cycles.
    await setTimeout(100)
    // XXX: Checking that the transpilation result has been applied.
    expect(shellSpy.mock.calls[0]).toStrictEqual([ 'yarn', [ '--cwd', packagePath, 'transpile' ] ])
    const installedPath = path.resolve(process.cwd(), `node_modules/${packageName}`)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'dist'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'web'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'lib'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'package.json'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'unrelated'))).toEqual(false)
  })

  it('strategy: TRANSPILED_LEGACY', async () => {
    const [ { packagePath, packageName } ] = mockFs.env.linksRegistry.init([ 'react' ])
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.updatePackageJson(process.cwd(), (old) => ({ ...old, dependencies: { react: '^1.0.0' } }))
    mockFs.env.packages.updatePackageJson(packagePath, (old) => ({ ...old, scripts: { build: 'node build' } }))
    mockFs.env.packages.installDependenciesFor(process.cwd())
    const shellSpy = vi.spyOn(UtilsMod, 'executeShellWithStream').mockReturnValue(Readable.from(''))
    // XXX: Cannot run transpile, since we're in sandbox. Will have to manually stub transpilation result.
    mockFs.env.packages.createFolders(packagePath, [ 'dist', 'web', 'lib', 'unrelated' ])
    // XXX: This is not async, and pipes into stdout, so have to manually wait for X amount of time,
    await commandLinkHandler('react')
    // NOTE: Since transpilation is stubbed, this value can be pretty low.
    // Just have to wait out a few event loop cycles.
    await setTimeout(100)
    // XXX: Checking that the transpilation result has been applied.
    expect(shellSpy.mock.calls[0]).toStrictEqual([ 'yarn', [ '--cwd', packagePath, 'build' ] ])
    const installedPath = path.resolve(process.cwd(), `node_modules/${packageName}`)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'dist'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'web'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'lib'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'package.json'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'unrelated'))).toEqual(false)
  })

  it('strategy: AMEND_NATIVE', async () => {
    const [ { packagePath, packageName } ] = mockFs.env.linksRegistry.init([ 'react' ])
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.updatePackageJson(process.cwd(), (old) => ({ ...old, dependencies: { react: '^1.0.0' } }))
    mockFs.env.packages.installDependenciesFor(process.cwd())
    mockFs.env.packages.createFolders(packagePath, [ 'amend', 'boundaries', 'lib', 'unrelated' ])
    // XXX: This is not async, and pipes into stdout, so have to manually wait for X amount of time,
    await commandLinkHandler('react')
    // NOTE: Since there is no transpilation step, this value can be pretty low.
    await setTimeout(100)
    // XXX: Checking that the transpilation result has been applied.
    const installedPath = path.resolve(process.cwd(), `node_modules/${packageName}`)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'amend'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'boundaries'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'lib'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'package.json'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'unrelated'))).toEqual(false)
  })

  it('strategy: MAKEFILE_BUILD', async () => {
    const [ { packagePath, packageName } ] = mockFs.env.linksRegistry.init([ 'react' ])
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.updatePackageJson(process.cwd(), (old) => ({ ...old, dependencies: { react: '^1.0.0' } }))
    mockFs.env.packages.installDependenciesFor(process.cwd())
    mockFs.env.packages.createFile(packagePath, 'Makefile', '')
    const shellSpy = vi.spyOn(UtilsMod, 'executeShellWithStream').mockReturnValue(Readable.from(''))
    // XXX: Cannot run transpile, since we're in sandbox. Will have to manually stub transpilation result.
    mockFs.env.packages.createFolders(packagePath, [ 'dist', 'web', 'lib', 'unrelated' ])
    // XXX: This is not async, and pipes into stdout, so have to manually wait for X amount of time,
    await commandLinkHandler('react')
    // NOTE: Since transpilation is stubbed, this value can be pretty low.
    // Just have to wait out a few event loop cycles.
    await setTimeout(100)
    // XXX: Checking that the transpilation result has been applied.
    expect(shellSpy.mock.calls[0]).toStrictEqual([ 'make', [ `-C ${packagePath}` ] ])
    const installedPath = path.resolve(process.cwd(), `node_modules/${packageName}`)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'dist'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'web'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'lib'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'package.json'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'unrelated'))).toEqual(false)
  })

  it('strategy: NOBUILD_SOURCE', async () => {
    const [ { packagePath, packageName } ] = mockFs.env.linksRegistry.init([ 'react' ])
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.updatePackageJson(process.cwd(), (old) => ({ ...old, dependencies: { react: '^1.0.0' } }))
    mockFs.env.packages.installDependenciesFor(process.cwd())
    mockFs.env.packages.createFolders(packagePath, [ 'lib', 'unrelated' ])
    // XXX: This is not async, and pipes into stdout, so have to manually wait for X amount of time,
    await commandLinkHandler('react')
    // NOTE: Since there is no transpilation step, this value can be pretty low.
    await setTimeout(100)
    // XXX: Checking that the transpilation result has been applied.
    const installedPath = path.resolve(process.cwd(), `node_modules/${packageName}`)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'lib'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'package.json'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'unrelated'))).toEqual(false)
  })

  it('strategy: LEGACY_AMEND_WEB_HYBRID', async () => {
    const [ { packagePath, packageName } ] = mockFs.env.linksRegistry.init([ 'react' ])
    mockFs.env.packages.initSingleInFolder('production', process.cwd())
    mockFs.env.packages.updatePackageJson(process.cwd(), (old) => ({ ...old, dependencies: { react: '^1.0.0' } }))
    mockFs.env.packages.updatePackageJson(packagePath, (old) => ({ ...old, scripts: { build: 'node build' } }))
    mockFs.env.packages.installDependenciesFor(process.cwd())
    const shellSpy = vi.spyOn(UtilsMod, 'executeShellWithStream').mockReturnValue(Readable.from(''))
    // XXX: Cannot run transpile, since we're in sandbox. Will have to manually stub transpilation result.
    mockFs.env.packages.createFolders(packagePath, [ 'amend', 'lib', 'web' ])
    // XXX: This is not async, and pipes into stdout, so have to manually wait for X amount of time,
    await commandLinkHandler('react')
    // NOTE: Since transpilation is stubbed, this value can be pretty low.
    // Just have to wait out a few event loop cycles.
    await setTimeout(100)
    // XXX: Checking that the transpilation result has been applied.
    expect(shellSpy.mock.calls[0]).toStrictEqual([ 'yarn', [ '--cwd', packagePath, 'build' ] ])
    const installedPath = path.resolve(process.cwd(), `node_modules/${packageName}`)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'web'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'lib'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'package.json'))).toEqual(true)
    expect(mockFs.fs.existsSync(path.resolve(installedPath, 'unrelated'))).toEqual(false)
  })

  it('linking to all packages in workspace', async () => {
    // Creating package outside of workspace to link
    const utils = mockFs.env.packages.initSingleInFolder('utils', path.resolve(process.cwd(), 'utils'))
    // Creating a workspace, where each package will have dependency to the outsider
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ _testspace, react, ui, other ] = mockFs.env.packages.initPNPMWorkspace([ 'react', 'ui', 'other' ], process.cwd())
    mockFs.env.packages.installDependenciesFor(process.cwd())
    // Setup "other"
    mockFs.env.packages.installDependenciesFor(other.packagePath)
    // Setup "react"
    mockFs.env.packages.updatePackageJson(react.packagePath, (old) => ({ ...old, dependencies: { utils: '^1.0.0' } }))
    mockFs.env.packages.installDependenciesFor(react.packagePath)
    // Setup "ui"
    mockFs.env.packages.updatePackageJson(ui.packagePath, (old) => ({ ...old, dependencies: { utils: '^1.0.0' } }))
    mockFs.env.packages.installDependenciesFor(ui.packagePath)
    // Setup registry
    mockFs.env.linksRegistry.initWithPaths([ utils ])
    // Set up "utils" (package to link)
    mockFs.env.packages.updatePackageJson(utils.packagePath, (old) => ({ ...old, scripts: { build: 'node build' } }))
    mockFs.env.packages.createFolders(utils.packagePath, [ 'amend', 'lib', 'web' ])
    // This is not async, and pipes into stdout, so have to manually wait for X amount of time,
    vi.spyOn(UtilsMod, 'executeShellWithStream').mockReturnValue(Readable.from(''))
    await commandLinkHandler('utils')
    // NOTE: Since transpilation is stubbed, this value can be pretty low.
    await setTimeout(100)
    // Checking that the transpilation result has been applied to every package in workspace.
    const reactInstalledPath = path.resolve(react.packagePath, `node_modules/${utils.packageName}`)
    expect(mockFs.fs.existsSync(path.resolve(reactInstalledPath, 'amend'))).toEqual(true)
    const uiInstalledPath = path.resolve(ui.packagePath, `node_modules/${utils.packageName}`)
    expect(mockFs.fs.existsSync(path.resolve(uiInstalledPath, 'amend'))).toEqual(true)
    const otherInstalledPath = path.resolve(other.packagePath, `node_modules/${utils.packageName}`)
    expect(mockFs.fs.existsSync(path.resolve(otherInstalledPath, 'amend'))).toEqual(false)
  })
})
