import { reduce } from 'ramda'
import path from 'path'
import fs from 'fs'
import { type ResolvedPackage, getPackageAtPath } from './get-package-at-path'
import { LINKS_LOCATION } from '../constants'

export function getLinkablePackages (rootPath: string = LINKS_LOCATION): ResolvedPackage[] {
  const folderItems = fs.readdirSync(rootPath)
  return reduce(
    (acc, itemPath) => {
      const fullItemPath = path.resolve(rootPath, itemPath)
      const stat = fs.lstatSync(fullItemPath)
      if (!stat || stat.isFile()) return acc
      if (stat.isSymbolicLink()) {
        const fullModulePath = path.resolve(rootPath, fs.readlinkSync(fullItemPath))
        const linkablePackage = getPackageAtPath(fullModulePath)
        if (linkablePackage != null){
          acc.push(linkablePackage)
        }
        return acc
      }
      const childPath = path.resolve(rootPath, itemPath)
      const packages = getLinkablePackages(childPath)
      acc.push(...packages)
      return acc
    },
    <ResolvedPackage[]> [],
    folderItems,
  )
}
