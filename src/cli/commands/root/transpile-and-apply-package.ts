import type { LinkingStrategy, ResolvedPackage } from '../../../core'
import { applyTranspilationResult, getLinkingStrategyForPackage, transpilePackage } from '../../../core'
import { log, error } from '../../lifecycle'
import { errorAsLinker, logAsLinker } from '../../log-as-linker'

/**
 * The function triggers transpilePackage
 * and applyTranspilationResult in order
 * to run the full linking operation.
 *
 * This function must only be called from the commands
 * module, since it utilizes oclif native utilities.
 * */
export function transpileAndApplyPackage(sourcePackage: ResolvedPackage, destinationPackage: ResolvedPackage): Promise<void>
export function transpileAndApplyPackage(sourcePackage: ResolvedPackage, destinationPackage: ResolvedPackage, $linkingStrategy: LinkingStrategy): Promise<void>
export function transpileAndApplyPackage(sourcePackage: ResolvedPackage, destinationPackage: ResolvedPackage, $linkingStrategy?: LinkingStrategy): Promise<void> {
  const linkingStrategy = $linkingStrategy ?? getLinkingStrategyForPackage(sourcePackage)
  if(linkingStrategy == null) {
    error('SPECIFIED_SOURCE_PACKAGE_IS_NOT_LINKABLE')
  }
  const transpilationStream = transpilePackage(sourcePackage, linkingStrategy)
  if (transpilationStream == null) {
    error('WEIRD_CASE_1')
  }
  transpilationStream.on('data', (message: string) => {
    log(message)
  })
  return new Promise((res) => {
    transpilationStream.on('error', (err) => {
      errorAsLinker(`Transpilation process has failed. See emitted logs from transpiler above. (Finished with: "${err}")`)
    })
    transpilationStream.on('end', () => {
      logAsLinker('Applying transpilation result...')
      applyTranspilationResult(
        sourcePackage,
        destinationPackage,
        linkingStrategy,
      )
      logAsLinker('Success!')
      res(void 0)
    })
  })
}
