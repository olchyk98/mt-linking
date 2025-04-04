import inquirer from 'inquirer'
import type { ResolvedPackage } from '../core'
import { find, map } from 'ramda'

export async function promptPackageToLink(linkablePackages: ResolvedPackage[]): Promise<ResolvedPackage> {
  const { selectedPackage } = await inquirer.prompt([
    {
      message: 'Select a package to link',
      name: 'selectedPackage',
      type: 'rawlist',
      choices: map((p) => p.packageJson.name ?? '?', linkablePackages),
    }
  ])

  return find(
    (p) => p.packageJson.name === selectedPackage,
    linkablePackages
  )!
}
