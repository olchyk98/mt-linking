import { ExecuteShellResult, executeShell } from '../../core'
import { LinkingStrategy } from './types'
import { logForLinker } from '../log-for-linker'

const strategyTranspileFnMap: Record<LinkingStrategy, TranspileFn> = {
  // TODO: --cwd
  TRANSPILED: (absolutePath) => executeShell('yarn', [ '--cwd', absolutePath, 'transpile' ]),
  TRANSPILED_LEGACY: (absolutePath) => executeShell('yarn', [ '--cwd', absolutePath, 'build' ]),
  AMEND_NATIVE: () => [ 'No transpilation required.' ],
  MAKEFILE_BUILD: (absolutePath) => executeShell('make', [ `-C ${absolutePath}` ]),
}

/**
* -----
* The function will transpile the specified package.
* How the transpilation will be performed depends on the
* specified "linkingStrategy".
*
* If the transpilation fails, the function
* will return (not throw) an error, otherwise
* nothing will be returned.
* */
export async function transpilePackage (absolutePath: string, linkingStrategy: LinkingStrategy): Promise<void> {
  try {
    const transpileFn = strategyTranspileFnMap[linkingStrategy]
    logForLinker(absolutePath, 'Transpiling the package...')
    const result = await transpileFn(absolutePath)
    if (!result) return
    const logs = Array.isArray(result) ? result : result.output
    logs.forEach((log) => logForLinker(absolutePath, log))
    if (!Array.isArray(result) && result.errored) {
      throw new Error('_CAUGHT_TRANSPILATION_ERROR')
    }
  } catch (e) {
    throw new Error(`Could not transpile the package: ${e}`)
  }
}

type TranspileFn = (
  (absolutePath: string) => void | Promise<void> | string[] | Promise<ExecuteShellResult>
)
