import { afterEach, beforeEach, describe, it, vi } from 'vitest'
import { PassThrough, Readable } from 'stream'
import * as GetPackageAtPathModule from '../../../src/core/get-package-at-path'
import { transpilePackage } from '../../../src/core/transpile-package'
import * as GetLinkingStrategyForPackageModule from '../../../src/core/get-linking-strategy-for-package'
import * as ExecuteShellWithStreamModule from '../../../src/utils'

function consumeStream (stream: Readable): Promise<unknown[]> {
  const result: unknown[] = []
  return new Promise((res, rej) => {
    stream.on('data', (c) => result.push(c))
    stream.on('error', (e) => rej(e))
    stream.on('end', () => res(result))
  })
}

describe.concurrent('transpilePackage', () => {
  beforeEach(() => {
    vi.spyOn(ExecuteShellWithStreamModule, 'executeShellWithStream')
      .mockImplementationOnce((...args) => {
        const stream = new PassThrough({ objectMode: true })
        stream.push({ args })
        stream.end()
        return stream
      })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return null if no package can be resolved at specified path', ({ expect }) => {
    vi.spyOn(GetPackageAtPathModule, 'getPackageAtPath')
      .mockReturnValueOnce(null)
    const result = transpilePackage('some_path')
    expect(result).toEqual(null)
  })

  it('should return null if no linking strategy works with the package', ({ expect }) => {
    vi.spyOn(GetLinkingStrategyForPackageModule, 'getLinkingStrategyForPackage')
      .mockReturnValueOnce(null)
    const result = transpilePackage({
      absolutePath: 'some_path',
      packageJson: { name: 'package' },
    })
    expect(result).toEqual(null)
  })

  it('should properly transpile package with linking strategy: TRANSPILED', async ({ expect }) => {
    vi.spyOn(GetLinkingStrategyForPackageModule, 'getLinkingStrategyForPackage')
      .mockReturnValueOnce('TRANSPILED')
    const transpileStream = transpilePackage({
      absolutePath: 'some_path',
      packageJson: { name: 'package' },
    })
    expect(transpileStream instanceof Readable).toEqual(true)
    const [ res ] = await consumeStream(transpileStream as Exclude<typeof transpileStream, null>)
    expect(res).toEqual({ args: [ 'yarn', [ '--cwd', 'some_path', 'transpile' ] ] })
  })

  it('should properly transpile package with linking strategy: TRANSPILED_LEGACY', async ({ expect }) => {
    vi.spyOn(GetLinkingStrategyForPackageModule, 'getLinkingStrategyForPackage')
      .mockReturnValueOnce('TRANSPILED_LEGACY')
    const transpileStream = transpilePackage({
      absolutePath: 'some_path',
      packageJson: { name: 'package' },
    })
    expect(transpileStream instanceof Readable).toEqual(true)
    const [ res ] = await consumeStream(transpileStream as Exclude<typeof transpileStream, null>)
    expect(res).toEqual({ args: [ 'yarn', [ '--cwd', 'some_path', 'build' ] ] })
  })

  it('should properly transpile package with linking strategy: AMEND_NATIVE', async ({ expect }) => {
    vi.spyOn(GetLinkingStrategyForPackageModule, 'getLinkingStrategyForPackage')
      .mockReturnValueOnce('AMEND_NATIVE')
    const transpileStream = transpilePackage({
      absolutePath: 'some_path',
      packageJson: { name: 'package' },
    })
    expect(transpileStream instanceof Readable).toEqual(true)
    const res = await consumeStream(transpileStream as Exclude<typeof transpileStream, null>)
    expect(res).toEqual([ '>> 🟢 No transpilation is required for this linking strategy 🟢 <<' ])
  })

  it('should properly transpile package with linking strategy: MAKEFILE_BUILD', async ({ expect }) => {
    vi.spyOn(GetLinkingStrategyForPackageModule, 'getLinkingStrategyForPackage')
      .mockReturnValueOnce('MAKEFILE_BUILD')
    const transpileStream = transpilePackage({
      absolutePath: 'some_path',
      packageJson: { name: 'package' },
    })
    expect(transpileStream instanceof Readable).toEqual(true)
    const [ res ] = await consumeStream(transpileStream as Exclude<typeof transpileStream, null>)
    expect(res).toEqual({ args: [ 'make', [ '-C some_path' ] ] })
  })

})
