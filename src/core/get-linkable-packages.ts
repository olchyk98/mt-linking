import { reduce } from "ramda"
import path from 'path'
import fs from 'fs'
import os from 'os'
import { getPackageAtPath, type ResolvedPackage } from './get-package-at-path'

const LINKS_LOCATION = path.resolve(os.homedir(), '.config/olink/link/')

export function readPackagesFromDir(folderPath: string): string[] {
  const folderItems = fs.readdirSync(folderPath)
  return reduce(
    (acc, itemPath) => {
      const fullItemPath = path.resolve(folderPath, itemPath)
      const stat = fs.lstatSync(fullItemPath)
      if (!stat || stat.isFile()) return acc
      if (stat.isSymbolicLink()) {
        const fullModulePath = path.resolve(folderPath, fs.readlinkSync(fullItemPath))
        acc.push(fullModulePath)
        return acc
      }
      const links = readPackagesFromDir(path.resolve(folderPath, itemPath))
      acc.push(...links)
      return acc
    },
    <string[]>[],
    folderItems,
  )
}


export function getLinkablePackages(): ResolvedPackage[] {
  const packagePaths = readPackagesFromDir(LINKS_LOCATION)
  return reduce(
    (acc, absolutePath) => {
      const linkablePackage = getPackageAtPath(absolutePath)
      if (linkablePackage == null) return acc
      acc.push(linkablePackage)
      return acc
    },
    <ResolvedPackage[]>[],
    packagePaths,
  )

}
