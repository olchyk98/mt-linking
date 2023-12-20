import path from 'path'
import chokidar from 'chokidar'
import { map } from 'ramda'
import { TRANSPILE_IGNORE, TRANSPILE_TRIGGERS } from '../../constants'

export function observeChangesForPackage (
  absolutePath: string,
  callback: ObserveChangesForPackageCallback,
): ObserveChangesForPackageUnsubscribeFn {
  let updateIndex = 0

  const triggersWithAbsolutePath = map(
    (t) => path.resolve(absolutePath, t),
    TRANSPILE_TRIGGERS,
  )
  const instance = chokidar.watch(triggersWithAbsolutePath, {
    ignored: TRANSPILE_IGNORE,
    persistent: true,
  })

  instance.on('change', async (updatedPath) => {
    await callback(updatedPath, updateIndex)
    updateIndex += 1
  })

  return () => instance.close()
}

export type ObserveChangesForPackageCallback = (
  (updatedPath: string, updateIndex: number) => Promise<void> | void
)
export type ObserveChangesForPackageUnsubscribeFn = () => void
