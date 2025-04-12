import process from 'process'
import path from 'path'
import { program } from '../program'
import { logAsLinker, warnAsLinker } from '../log'
import { getPackageAtPath, learnPackage } from '../../core'
import { globMatch, stripSuffix } from '../../utils'

program
  .command('learn')
  .description('Link one package to another package')
  .argument('[pattern]', 'Optional pattern to match package.json files against. Allows to link multiple packages at once')
  .action(async (pattern?: string) => {
    const cwd = process.cwd()
    const paths = pattern == null
      ? [ cwd ]
      : globMatch(`${stripSuffix(pattern, '/')}/package.json`, { cwd })
        .map((s) => path.resolve(s))
    if (pattern != null) {
      logAsLinker(`Found ${paths.length} package(s).`)
    }
    // XXX: The dumb user guard. https://en.wikipedia.org/wiki/User_error
    const allowedPaths = paths.filter((l) => !l.includes('node_modules'))
    if (allowedPaths.length !== paths.length) {
      warnAsLinker(`Filtered out ${paths.length - allowedPaths.length} package(s), since they are defined in node_modules. Consult with documentation about this behaviour.`)
    }
    let learned = 0
    for (const pathToLearn of allowedPaths) {
      const packageToLink = getPackageAtPath(pathToLearn)
      if (packageToLink == null) {
        warnAsLinker(`Could not learn package at path ${pathToLearn}: not a valid package (1)`)
        continue
      }
      if (learnPackage(packageToLink)) {
        logAsLinker(`"${packageToLink.packageJson.name}" has been learned!`)
        learned += 1
      } else {
        warnAsLinker(`Could not learn package at path ${packageToLink.packageJson.name}: not a valid package (2)`)
        continue
      }
    }
    if (allowedPaths.length === 0) {
      logAsLinker('No packages to link')
    } else if (paths.length > 1) {
      logAsLinker(`Successfully learned ${learned} packages out of ${allowedPaths.length}`)
    }
  })
