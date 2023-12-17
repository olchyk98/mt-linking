import path from 'path'
import os from 'os'
import fs from 'fs'
import { append, concat, reduce } from 'ramda'

const YARN_LINKS_LOCATION = path.resolve(os.homedir(), '.config/yarn/link/')

const readPackagesFromDir = (folderPath: string): string[] => {
  const folderItems = fs.readdirSync(folderPath)
  return reduce(
    (acc, itemPath) => {
      const fullItemPath = path.resolve(folderPath, itemPath)
      const stat = fs.lstatSync(fullItemPath)
      if (!stat || stat.isFile()) return acc
      if (stat.isSymbolicLink()) {
        const fullModulePath = path.resolve(folderPath, fs.readlinkSync(fullItemPath))
        return append(fullModulePath, acc)
      }
      const links = readPackagesFromDir(path.resolve(folderPath, itemPath))
      return concat(acc, links)
    },
    <string[]> [],
    folderItems,
  )
}

/**
* -----
* Upon calling, this recursive function will fetch
* all packages linked with "yarn link"
* and return the list of linked packages.
*
* The function performs a FS action
* in sync mode.
*
* Returns an array of absolute paths
* to packages that were saved
* in the "yarn link" registry.
* */
export function getLinkablePackages (): string[] {
  const packagePaths = readPackagesFromDir(YARN_LINKS_LOCATION)
  return packagePaths
}
