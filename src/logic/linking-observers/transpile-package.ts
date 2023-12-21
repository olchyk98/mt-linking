import { executeShell } from '../../core'
import { LinkingStrategy } from './types'

const strategyTranspileFnMap: Record<LinkingStrategy, TranspileFn> = {
  // TODO: --cwd
  TRANSPILED: (absolutePath) => executeShell('yarn', [ `--cwd ${absolutePath}`, 'transpile' ]),
  TRANSPILED_LEGACY: (absolutePath) => executeShell('yarn', [ `--cwd ${absolutePath}`, 'build' ]),
  AMEND_NATIVE: () => [ 'No transpilation required.' ],
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
export async function transpilePackage (absolutePath: string, linkingStrategy: LinkingStrategy): Promise<void | Error> {
  const transpileFn = strategyTranspileFnMap[linkingStrategy]
  try {
    const logs = await transpileFn(absolutePath)
    // TODO: Emit logs
  } catch (e) {
    return e
  }
}

type TranspileFn = (
  (absolutePath: string) => void | string[] | Promise<void> | Promise<string[]>
)
