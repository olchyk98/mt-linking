import fs from 'fs'
import { debounceFn } from './debounce-fn'
import { executeShell } from './execute-shell'

async function isFileEligibleForWatch (relativePath: string, cwd?: string): Promise<boolean> {
  // XXX: check-ignore will exit with error if the target is not in gitignore
  // and will exit with code 0 and input value in stdout if path is in gitignore.
  const result = await executeShell('git', [ 'check-ignore', relativePath ], { cwd })
    .catch(() => '')
  return result.length <= 0
}

/**
 * Creates a watcher process that observes
 * file changes in the folder. If the folder
 * contains .gitignore file, it will be used
 * to minimize noise in the output - files listened
 * in .gitignore will be ignored by the watcher.
 *
 * The function accepts absolutePath to the
 * targeted folder and callback function
 * that will be triggered. The function
 * returns an unsubscribe function.
 * */
export function observeFolderChanges (
  absolutePath: string,
  observerOpts: ObserverOpts,
  callback: (filename: string) => void,
): () => void {
  const { debounceMs } = observerOpts
  const debouncedCallback = debounceMs != null ? debounceFn(callback, debounceMs) : callback
  const watcher = fs.watch(
    absolutePath,
    { recursive: true },
    async (_eventType, filename) => {
      if (filename != null && await isFileEligibleForWatch(filename, absolutePath)) {
        debouncedCallback(filename)
      }
    },
  )
  return () => watcher.close()
}

export interface ObserverOpts {
  debounceMs?: number
}
