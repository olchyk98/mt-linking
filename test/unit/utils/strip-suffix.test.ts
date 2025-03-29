import { describe, it } from 'vitest'
import { stripSuffix } from '../../../src/utils'

describe.concurrent('stripSuffix', () => {
  it('should return input if suffix is empty', ({ expect }) => {
    const result = stripSuffix('hello', '')
    expect(result).toEqual('hello')
  })

  it('should return "" if input is empty', ({ expect }) => {
    const result = stripSuffix('', 'someSuffix')
    expect(result).toEqual('')
  })

  it('should return input if input does not end with suffix', ({ expect }) => {
    const result = stripSuffix('someInput', 'someSuffix')
    expect(result).toEqual('someInput')
  })

  it('should properly strip suffix part from input', ({ expect }) => {
    const result = stripSuffix('someInput', 'Input')
    expect(result).toEqual('some')
  })
})
