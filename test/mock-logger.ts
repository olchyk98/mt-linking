import { afterEach, beforeEach, vi } from 'vitest'
import * as LifecycleMod from '../src/utils/lifecycle'

export const mockedLogs: string[] = []

/** NOTE: Must be ran inside of "describe", but outside of "it" */
export function setupLoggerMockLifecycle () {
  beforeEach(() => {
    vi.spyOn(LifecycleMod, 'log')
      .mockImplementation((...messages) => {
        mockedLogs.push(messages.join(' '))
      })
    vi.spyOn(LifecycleMod, 'error')
      .mockImplementation((error) => {
        // XXX: Instead of calling process.exit(), we'll
        // just throw an error we can catch in the test worker.
        throw (error instanceof Error ? error : new Error(error))
      })
  })

  afterEach(() => {
    vi.resetAllMocks()
    mockedLogs.length = 0
  })
}
