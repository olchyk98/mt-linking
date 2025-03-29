import path from 'path'
import fs from 'fs'
import type { IPackageJson as PackageJson } from 'package-json-type'
import { stripSuffix } from '../utils'

/*
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
export function getPackageJSONAtPath($absolutePath: string): PackageJson | null {
  try {
    const absolutePath = stripSuffix($absolutePath, 'package.json')
    const specPath = path.resolve(absolutePath, 'package.json')
    const specJson = fs.readFileSync(specPath, 'utf8')
    return JSON.parse(specJson) as PackageJson
  } catch (_) {
    return null
  }

}

export type { IPackageJson as PackageJson } from 'package-json-type'
