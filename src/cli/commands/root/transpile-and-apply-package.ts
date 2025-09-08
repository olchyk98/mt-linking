import nodeNotifier from 'node-notifier'
import {
  LinkingStrategy,
  ResolvedPackage,
  applyTranspilationResult,
  getLinkingStrategyForPackage,
  transpilePackage,
} from '../../../core'
import { errorRenderers } from '../../../errors'
import { error, log } from '../../lifecycle'
import { errorAsLinker, logAsLinker } from '../../log'

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
export function transpileAndApplyPackage (sourcePackage: ResolvedPackage, destinationPackage: ResolvedPackage, $linkingStrategy?: LinkingStrategy): Promise<void> {
  const linkingStrategy = $linkingStrategy ?? getLinkingStrategyForPackage(sourcePackage)
  if (linkingStrategy == null) {
    error(errorRenderers.SPECIFIED_SOURCE_PACKAGE_IS_NOT_LINKABLE())
  }
  const transpilationStream = transpilePackage(sourcePackage, linkingStrategy)
  if (transpilationStream == null) {
    error(errorRenderers.FATAL_UNEXPECTED_ERROR())
  }
  transpilationStream.on('data', (message: string) => {
    log(message)
  })
  return new Promise((res) => {
    transpilationStream.on('error', (err) => {
      errorAsLinker(`Transpilation process has failed. See emitted logs from transpiler above. (Finished with: "${err}")`)
      nodeNotifier.notify({
        title: 'Oink',
        message: 'Transpilation process has failed. See emitted logs in your terminal to find out more',
        sound: true,
        wait: false,
      })
    })
    transpilationStream.on('end', async () => {
      logAsLinker('Applying transpilation result...')
      await applyTranspilationResult(
        sourcePackage,
        destinationPackage,
        linkingStrategy,
      )
      logAsLinker('Success!')
      nodeNotifier.notify({
        title: 'Oink',
        message: `${sourcePackage.packageJson.name} has successfully been linked to ${destinationPackage.packageJson.name}`,
        sound: false,
        wait: false,
      })
      res(void 0)
    })
  })
}
