import fzf from 'node-fzf'
import type { ResolvedPackage } from '../core'
import { error } from '../cli/lifecycle'
import { errorRenderers } from '../errors'

export async function promptPackageToLink (linkablePackages: ResolvedPackage[]): Promise<ResolvedPackage> {
  const res = await fzf({
    selectOne: false,
    list: linkablePackages.map((p) => p.packageJson.name ?? '?'),
  })
  const selectedPackage = res.selected?.value
  // XXX: User has pressed "CTRL+C".
  if (selectedPackage == null) {
    error(errorRenderers.NO_SOURCE_PACKAGE_SELECTED())
  }
  return linkablePackages.find(
    (p) => p.packageJson.name === selectedPackage,
  )!
}
