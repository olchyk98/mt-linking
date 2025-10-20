import { describe, expect, it } from 'vitest'
import { getMockFs } from '../../mock-fs'
import { commandForgetHandler } from '../../../src/commands'

describe('commandForgetHandler', () => {
  const mockFs = getMockFs()

  it('links registry does not exist yet', async () => {
    const promise = commandForgetHandler()
    await expect(promise).resolves.toBe(void 0)
    expect(mockFs.env.linksRegistry.content).toStrictEqual([])
  })

  it('links registry is empty', async () => {
    mockFs.env.linksRegistry.init()
    const promise = commandForgetHandler()
    await expect(promise).resolves.toBe(void 0)
    expect(mockFs.env.linksRegistry.content).toStrictEqual([])
  })

  it('links registry has flat links', async () => {
    mockFs.env.linksRegistry.init([
      'ramda',
      'react',
    ])
    await commandForgetHandler()
    expect(mockFs.env.linksRegistry.content).toStrictEqual([])
  })

  it('links registry has nested links', async () => {
    mockFs.env.linksRegistry.init([
      '@testspace/signal',
      '@testspace/romero',
    ])
    await commandForgetHandler()
    expect(mockFs.env.linksRegistry.content).toStrictEqual([])
  })

  it('mixed types of links in registry', async () => {
    mockFs.env.linksRegistry.init([
      'ramda',
      'react',
      '@testspace/signal',
      '@testspace/cameo/adc',
      '@testspace/romero',
    ])
    await commandForgetHandler()
    expect(mockFs.env.linksRegistry.content).toStrictEqual([])
  })
})
