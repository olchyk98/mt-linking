import { append, reduce } from 'ramda'
import { getLinkablePackages } from './get-linkable-packages'
import { getPackageNameByPath } from './get-package-name-by-path'

export function getLinkablePackagesWithMeta (): LinkablePackage[] {
  const absolutePaths = getLinkablePackages()
  const linkablePackagesWithMeta = reduce(
    (acc, absolutePath) => {
      const name = getPackageNameByPath(absolutePath)
      if (!name) return acc
      const item: LinkablePackage = { name, absolutePath }
      return append(item, acc)
    },
    <LinkablePackage[]> [],
    absolutePaths,
  )
  return linkablePackagesWithMeta
}

export interface LinkablePackage {
  name: string
  absolutePath: string
}
