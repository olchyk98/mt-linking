import { describe, expect, it } from 'vitest'
import path from 'path'
import { commandLearnHandler } from '../../../src/commands'
import { getMockFs } from '../../mock-fs'
import { mockedLogs, setupLoggerMockLifecycle } from '../../mock-logger'

describe('commandLearnHandler', () => {
  setupLoggerMockLifecycle()
  const mockFs = getMockFs()

  it('not in package', async () => {
    await commandLearnHandler()
    expect(mockedLogs).toStrictEqual([
      `[Oink]: Could not learn package at path ${process.cwd()}: not a valid package (1)`,
    ])
  })

  it('in regular package', async () => {
    mockFs.env.packages.initSingleInFolder('react', process.cwd())
    await commandLearnHandler()
    expect(mockedLogs).toStrictEqual([
      '[Oink]: "react" has been learned!',
    ])
  })

  it('in regular package without name', async () => {
    mockFs.env.packages.initSingleInFolder('react', process.cwd())
    mockFs.env.packages.updatePackageJson(process.cwd(), () => ({}))
    await commandLearnHandler()
    expect(mockedLogs).toStrictEqual([
      `[Oink]: Could not learn package at path ${process.cwd()}: not a valid package (1)`,
    ])
  })

  it('in pnpm workspace', async () => {
    mockFs.env.packages.initPNPMWorkspace([ 'react', 'svelte', 'vue' ], process.cwd())
    await commandLearnHandler()
    expect(mockedLogs).toStrictEqual([
      '[Oink]: "react" has been learned!',
      '[Oink]: "svelte" has been learned!',
      '[Oink]: "vue" has been learned!',
      '[Oink]: Successfully learned 3 packages out of 3',
    ])
  })

  it('in yarn workspace', async () => {
    mockFs.env.packages.initYarnWorkspace([ 'react', 'svelte', 'vue' ], process.cwd())
    await commandLearnHandler()
    expect(mockedLogs).toStrictEqual([
      '[Oink]: "react" has been learned!',
      '[Oink]: "svelte" has been learned!',
      '[Oink]: "vue" has been learned!',
      '[Oink]: Successfully learned 3 packages out of 3',
    ])
  })

  it('in yarn workspace with a package without name', async () => {
    mockFs.env.packages.initYarnWorkspace([ 'react', 'svelte', 'vue' ], process.cwd())
    mockFs.env.packages.updatePackageJson(
      path.resolve(process.cwd(), 'svelte'),
      (old) => ({ ...old, name: undefined }),
    )
    await commandLearnHandler()
    expect(mockedLogs).toStrictEqual([
      '[Oink]: "react" has been learned!',
      `[Oink]: Could not learn package at path ${process.cwd()}/svelte/: not a valid package (1)`,
      '[Oink]: "vue" has been learned!',
      '[Oink]: Successfully learned 2 packages out of 3',
    ])
  })

  it('in pnpm workspace with a package without name', async () => {
    mockFs.env.packages.initYarnWorkspace([ 'react', 'svelte', 'vue' ], process.cwd())
    mockFs.env.packages.updatePackageJson(
      path.resolve(process.cwd(), 'svelte'),
      (old) => ({ ...old, name: undefined }),
    )
    await commandLearnHandler()
    expect(mockedLogs).toStrictEqual([
      '[Oink]: "react" has been learned!',
      `[Oink]: Could not learn package at path ${process.cwd()}/svelte/: not a valid package (1)`,
      '[Oink]: "vue" has been learned!',
      '[Oink]: Successfully learned 2 packages out of 3',
    ])
  })

  it('with relative file pattern', async () => {
    mockFs.env.packages.initMultipleInFolder([ 'react', 'svelte', 'vue' ], process.cwd())
    await commandLearnHandler('./svelte')
    expect(mockedLogs).toStrictEqual([
      '[Oink]: Found 1 package(s).',
      '[Oink]: "svelte" has been learned!',
    ])
  })

  it('no packages matching relative file pattern', async () => {
    mockFs.env.packages.initMultipleInFolder([ 'react', 'svelte', 'vue' ], process.cwd())
    await commandLearnHandler('./angular')
    expect(mockedLogs).toStrictEqual([
      '[Oink]: Found 0 package(s).',
      '[Oink]: No packages to link',
    ])
  })

  it('with absolute file pattern', async () => {
    mockFs.env.packages.initMultipleInFolder([ 'react', 'svelte', 'vue' ], process.cwd())
    await commandLearnHandler(path.resolve(process.cwd(), './svelte'))
    expect(mockedLogs).toStrictEqual([
      '[Oink]: Found 1 package(s).',
      '[Oink]: "svelte" has been learned!',
    ])
  })

  it('no packages matching absolute file pattern', async () => {
    mockFs.env.packages.initMultipleInFolder([ 'react', 'svelte', 'vue' ], process.cwd())
    await commandLearnHandler(path.resolve(process.cwd(), './angular'))
    expect(mockedLogs).toStrictEqual([
      '[Oink]: Found 0 package(s).',
      '[Oink]: No packages to link',
    ])
  })
})
