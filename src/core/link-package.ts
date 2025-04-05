import path from 'path'
import fs from 'fs'
import os from 'os'
import { getPackageAtPath, type ResolvedPackage } from './get-package-at-path'

export const LINKS_LOCATION = path.resolve(os.homedir(), '.config/olink/link/')

/**
 * Accepting ResolvedPackage or absolutePath it tries
 * to resolve to the package and create symlink to
 * the internal folder which works as a readable collection
 * of linkable packages that are used by the "root" command.
 * */
export function linkPackage (absolutePath: ResolvedPackage | string): true | null {
  const packageToLink = typeof absolutePath === 'string' 
    ? getPackageAtPath(absolutePath) 
    : absolutePath
  if (packageToLink == null) return null
  const linkLocation = path.resolve(LINKS_LOCATION, packageToLink.packageJson.name)
  const linkDirLocation = path.resolve(linkLocation, '..')
  fs.mkdirSync(linkDirLocation, { recursive: true })
  try { fs.rmSync(linkLocation, { recursive: true }) } catch {}
  fs.symlinkSync(packageToLink.absolutePath, linkLocation)
  return true
}
