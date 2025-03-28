import { describe, it } from 'vitest'

describe.concurrent('test', () => (
  it(
    'test',
    ({ expect }) => expect(1).toEqual(1)
  )
))
