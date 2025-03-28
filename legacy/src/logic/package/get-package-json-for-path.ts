import path from 'path'
import fs from 'fs'
import { PACKAGE_JSON } from '../../literals'

/**
* -----
* The function takes the absolutePath
* that points to a directory and tries
* to fetch package.json that supposedly is
* in the specified directory.
*
* When the package.json filed is
* loaded into memory, it gets parsed
* to an object with PackageJson type.
*
* If the package.json file does not
* exist at the specified path, the
* function will return null.
* */
export function getPackageJsonForPath (absolutePath: string, sync: false): Promise<PackageJson | null>
export function getPackageJsonForPath (absolutePath: string, sync: true): PackageJson | null
export function getPackageJsonForPath (absolutePath: string, sync: boolean): Promise<PackageJson | null> | PackageJson | null
export function getPackageJsonForPath (absolutePath: string, sync: boolean): Promise<PackageJson | null> | PackageJson | null {
  try {
    const specPath = path.resolve(absolutePath, PACKAGE_JSON)
    if (sync) {
      const specJson = fs.readFileSync(specPath, 'utf8')
      return JSON.parse(specJson) as PackageJson
    }
    return fs.promises.readFile(specPath, 'utf8')
      .then((specJson) => JSON.parse(specJson) as PackageJson)
  } catch (_) {
    return null
  }
}

export interface PackageJson {
  name: string
  scripts?: Record<string, string>
}
