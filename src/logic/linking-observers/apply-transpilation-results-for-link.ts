// TODO: CONTINUE HERE -> Implement logs pushing with redux state (there are other comments on how to do that in TODOs)
import fs from 'fs'
import path from 'path'
import Bluebird from 'bluebird'
import { identity } from 'ramda'
import { ModuleLink } from '../../state'
import { LinkingStrategy } from './types'
import { panic } from '../../utils'
import { getPackageNameByPath } from '../package'

// XXX: There's a possible edge-case, when some packages
// require copying node_modules as well. Not solving this
// for now, until the problem can be fully reproduced.

const resolveDestination = async (link: ModuleLink) => {
  const { from, to } = link
  const packageName = await getPackageNameByPath(from, false)
  if (!packageName) panic(`Unknown module (${from})`)
  return path.resolve(to, 'node_modules', packageName)
}

const copyDistForLink: ApplyTranspilationResultFn = async (link) => {
  const dist = path.resolve(link.from, 'dist')
  const dest = await resolveDestination(link)
  await fs.promises.rmdir(path.resolve(dest, 'dist'), { recursive: true }).catch(identity)
  await fs.promises.cp(dist, dest, { recursive: true })
}

const copyAmendSourcesForLink: ApplyTranspilationResultFn = async (link) => {
  const targets = [ 'amend', 'boundaries', 'lib' ]
  const dest = await resolveDestination(link)
  await Bluebird.mapSeries(targets, async (target) => {
    const dist = path.resolve(link.from, target)
    await fs.promises.rmdir(path.resolve(dest, target), { recursive: true }).catch(identity)
    await fs.promises.cp(dist, dest, { recursive: true })
  })
}

const strategyApplyResultFnMap: Record<LinkingStrategy, ApplyTranspilationResultFn> = {
  TRANSPILED: copyDistForLink,
  TRANSPILED_LEGACY: copyDistForLink,
  AMEND_NATIVE: copyAmendSourcesForLink,
}

export async function applyTranspilationResultForLink (
  link: ModuleLink,
  linkingStrategy: LinkingStrategy,
): Promise<void | Error> {
  const applyResultFn = strategyApplyResultFnMap[linkingStrategy]
  try {
    await applyResultFn(link)
    // TODO: log
  } catch (e) {
    return e
  }
}

type ApplyTranspilationResultFn = (link: ModuleLink) => Promise<void>
