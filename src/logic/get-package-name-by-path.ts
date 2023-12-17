import fs from 'fs'
import path from 'path'
import { propOr } from 'ramda'

/**
* -----
* Pulls package name by picking package.json from the
* specified directory. If the path does not exist
* or does not include a package.json, null pointer will
* be returned.
*
* The specified "packagePath" has to be absolute.
* */
export function getPackageNameByPath (packagePath: string): string | null {
  try {
    const specPath = path.resolve(packagePath, 'package.json')
    const specJson = fs.readFileSync(specPath, 'utf8')
    const spec = JSON.parse(specJson) as PackageJson
    return propOr(null, 'name', spec)
  } catch (_) {
    return null
  }
}

interface PackageJson {
  name: string
}
