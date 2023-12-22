import path from 'path'
import chokidar from 'chokidar'
import { map } from 'ramda'
import { TRANSPILE_IGNORE, TRANSPILE_TRIGGERS } from '../../constants'

const applyAbsolutePathToPatterns = (absolutePath: string, patterns: string[]): string[] => (
  map((t) => path.resolve(absolutePath, t), patterns)
)

export function observeChangesForPackage (
  absolutePath: string,
  callback: ObserveChangesForPackageCallback,
): ObserveChangesForPackageUnsubscribeFn {
  let updateIndex = -1

  const triggersWithAbsolutePath = applyAbsolutePathToPatterns(absolutePath, TRANSPILE_TRIGGERS)
  const ignorePatternsWithAbsolutePath = applyAbsolutePathToPatterns(absolutePath, TRANSPILE_IGNORE)

  const instance = chokidar.watch(triggersWithAbsolutePath, {
    ignored: ignorePatternsWithAbsolutePath,
    persistent: true,
  })

  instance.on('change', async (updatedPath) => {
    updateIndex += 1
    await callback(updatedPath, updateIndex)
  })

  return () => instance.close()
}

export type ObserveChangesForPackageCallback = (
  (updatedPath: string, updateIndex: number) => Promise<void> | void
)
export type ObserveChangesForPackageUnsubscribeFn = () => void
