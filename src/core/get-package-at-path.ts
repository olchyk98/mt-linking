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
 * Returns null if there's no package.json
 * at specified location. The input can
 * either point to package.json or folder
 * containing it.
 * */
export function getPackageAtPath($absolutePath: string): ResolvedPackage | null {
  try {
    const absolutePath = stripSuffix($absolutePath, 'package.json')
    const specPath = path.resolve(absolutePath, 'package.json')
    const packageJson = fs.readFileSync(specPath, 'utf8')
    const packageJsonObj = JSON.parse(packageJson) as PackageJson
    return { absolutePath, packageJson: packageJsonObj }
  } catch (_) {
    return null
  }

}

export interface ResolvedPackage {
  absolutePath: string
  packageJson: PackageJson
}

/**
 * Same as "ResolvedPackage", but "packageJson.name"
 * is not "string | undefined", but "string" (required to exist).
 * */
export type ResolvedPackageWithValidName = (
  Omit<ResolvedPackage, 'packageJson'> & {
    packageJson: Omit<PackageJson, 'name'> & Required<Pick<PackageJson, 'name'>>
  }
)
