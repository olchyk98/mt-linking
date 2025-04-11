import fzf from 'node-fzf'
import type { ResolvedPackage } from '../core'
import { find, map } from 'ramda'
import { error } from '../cli/lifecycle'
import { errorRenderers } from '../errors'

export async function promptPackageToLink (linkablePackages: ResolvedPackage[]): Promise<ResolvedPackage> {
  const res = await fzf({
    selectOne: false,
    list: map((p) => p.packageJson.name ?? '?', linkablePackages),
  })
  const selectedPackage = res.selected?.value
  // XXX: User has pressed "CTRL+C".
  if (selectedPackage == null) {
    error(errorRenderers.NO_SOURCE_PACKAGE_SELECTED())
  }
  return find(
    (p) => p.packageJson.name === selectedPackage,
    linkablePackages,
  )!
}
