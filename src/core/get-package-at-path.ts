import path from 'path'
import fs from 'fs'
import type { IPackageJson as PackageJson } from 'package-json-type'
import { stripSuffix } from '../utils'

/**
 * Returns an customly normalized struct
 * derived from package.json placed in the specified
 * location. Helpful if you're trying to quickly
 * get meta information about a specific
 * package at some location.
 *
 * RGturns null if there's no package.json
 * at specified location. The input can
 * either point to package.json or folder
 * containing it.
 * */
export function getPackageAtPath ($absolutePath: string): ResolvedPackage | null {
  try {
    const absolutePath = stripSuffix($absolutePath, 'package.json')
    const specPath = path.resolve(absolutePath, 'package.json')
    const packageJson = fs.readFileSync(specPath, 'utf8')
    const packageJsonObj = JSON.parse(packageJson) as PackageJson
    if (packageJsonObj.name == null) return null
    return { absolutePath, packageJson: packageJsonObj } as ResolvedPackage
  } catch (_) {
    return null
  }

}

// XXX: We have to create this interface without index, because
// using Omit (and Pick) seems to break the interface otherwise.
type PackageJsonWithoutIndex = {
  // XXX: "...as string..." - removes the index by remapping key to "never",
  // making the compiler omit the property. This is called "Key Remapping".
  [K in keyof PackageJson as string extends K ? never : K]: PackageJson[K]
}

export interface ResolvedPackage {
  absolutePath: string
  // XXX: This is a hacky solution for making "name" property required (as it is being forced to be required
  // by the resolver function). I had to do a hacky solution, because of how index type properties work
  // with Pick utility (used by Omit).
  packageJson: PackageJsonWithoutIndex & Required<Pick<PackageJsonWithoutIndex, 'name'>> & { [index: string]: unknown }
}
