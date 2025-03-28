import fs from 'fs'
import path from 'path'
import Bluebird from 'bluebird'
import { identity } from 'ramda'
import { ModuleLink } from '../../state'
import { LinkingStrategy } from './types'
import { panic } from '../../utils'
import { getPackageNameByPath } from '../package'
import { logForLinker } from '../log-for-linker'

// XXX: There's a possible edge-case, when some packages
// require copying node_modules as well. Not solving this
// for now, until the problem can be fully reproduced.

async function resolveDestination (link: ModuleLink): Promise<string> {
  const { from, to } = link
  const packageName = await getPackageNameByPath(from, false)
  if (!packageName) panic(`Unknown module (${from})`)
  return path.resolve(to, 'node_modules', packageName)
}

const copyDistForLink: ApplyTranspilationResultFn = async (link) => {
  const dist = path.resolve(link.from, 'dist')
  const dest = path.resolve(await resolveDestination(link), 'dist')
  await fs.promises.rmdir(dest, { recursive: true }).catch(identity)
  await fs.promises.cp(dist, dest, { recursive: true })
}

const copyAmendSourcesForLink: ApplyTranspilationResultFn = async (link) => {
  const targets = [ 'amend', 'boundaries', 'lib' ]
  const destBase = await resolveDestination(link)
  await Bluebird.mapSeries(targets, async (target) => {
    const dist = path.resolve(link.from, target)
    const dest = path.resolve(destBase, target)
    await fs.promises.rmdir(dest, { recursive: true }).catch(identity)
    await fs.promises.cp(dist, dest, { recursive: true })
  })
}

const strategyApplyResultFnMap: Record<LinkingStrategy, ApplyTranspilationResultFn> = {
  TRANSPILED: copyDistForLink,
  TRANSPILED_LEGACY: copyDistForLink,
  MAKEFILE_BUILD: copyDistForLink,
  AMEND_NATIVE: copyAmendSourcesForLink,
}

export async function applyTranspilationResultForLink (
  link: ModuleLink,
  linkingStrategy: LinkingStrategy,
): Promise<void> {
  const applyResultFn = strategyApplyResultFnMap[linkingStrategy]
  try {
    logForLinker(link.from, 'Applying transpilation result...')
    await applyResultFn(link)
  } catch (e) {
    new Error(`Could not apply transpilation result: ${e}`)
  }
}

type ApplyTranspilationResultFn = (link: ModuleLink) => Promise<void>
