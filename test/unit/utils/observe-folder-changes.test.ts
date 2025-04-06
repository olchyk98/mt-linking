import { afterEach, beforeEach, describe, it, vi } from 'vitest'
import fs from 'fs'
import * as ExecuteShellModule from '../../../src/utils/execute-shell'
import * as DebounceFnModule from '../../../src/utils/debounce-fn'
import { observeFolderChanges } from '../../../src/utils'

describe.concurrent('observeFolderChanges', () => {
  beforeEach(() => {
    vi.spyOn(DebounceFnModule, 'debounceFn')
      .mockImplementation((fn) => fn)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should properly trigger callback on file update', async ({ expect }) => {
    const closeWatcherSpy = vi.fn()
    const callbackSpy = vi.fn()
    const fsWatchSpy = vi.spyOn(fs, 'watch')
      .mockReturnValueOnce({ close: closeWatcherSpy } as unknown as fs.FSWatcher)
    vi.spyOn(ExecuteShellModule, 'executeShell')
      .mockRejectedValueOnce(new Error('fatal: this file is allowed lol'))
    const unsubscribe = observeFolderChanges('some_path', {}, callbackSpy)
    // XXX: Manually triggering the fs.watch callback.
    // @ts-expect-error year 2025 and we still cannot properly resolve overloads..
    await fsWatchSpy.mock.lastCall?.[2]?.('change', 'some_filename')
    expect(callbackSpy.mock.calls).toStrictEqual([ [ 'some_filename' ] ])
    // XXX: Testing unsubscribe functionality
    unsubscribe()
    expect(closeWatcherSpy.mock.calls.length).toEqual(1)
  })

  it('should properly ignore file if it is ignored in git', async ({ expect }) => {
    const closeWatcherSpy = vi.fn()
    const callbackSpy = vi.fn()
    const fsWatchSpy = vi.spyOn(fs, 'watch')
      .mockReturnValueOnce({ close: closeWatcherSpy } as unknown as fs.FSWatcher)
    vi.spyOn(ExecuteShellModule, 'executeShell')
      .mockImplementation(async (_command, args) => {
        const filename = args[1]
        if (filename === 'ignored_filename') return 'ignored_filename'
        throw new Error('fatal: this file is allowed lol')
      })
    observeFolderChanges('some_path', {}, callbackSpy)
    // XXX: Manually triggering the fs.watch callback.
    // @ts-expect-error year 2025 and we still cannot properly resolve overloads..
    await fsWatchSpy.mock.lastCall?.[2]?.('change', 'ignored_filename')
    // @ts-expect-error year 2025 and we still cannot properly resolve overloads..
    await fsWatchSpy.mock.lastCall?.[2]?.('change', 'non_ignored_filename')
    expect(callbackSpy.mock.calls).toStrictEqual([ [ 'non_ignored_filename' ] ])
  })
})
