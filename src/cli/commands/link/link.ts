import process from 'process'
import { program } from '../../program'
import { logAsLinker } from '../../log'
import { error } from '../../lifecycle'
import { getPackageAtPath, linkPackage } from '../../../core'
import { errorRenderers } from '../../../errors'

program
  .command('link')
  .description('Link one package to another package')
  .argument('[package]', 'Name of package to propagate changes from')
  .option('-d, --dest [string]')
  .option('--livereload', 're-link automatically on every file change')
  .action(async () => {
    const cwd = process.cwd()
    const packageToLink = getPackageAtPath(cwd)
    if (packageToLink == null) {
      error(errorRenderers.INSUFFICIENT_INFO_IN_DEST_PACKAGE_JSON())
    }
    if (linkPackage(packageToLink)) {
      logAsLinker(`${packageToLink.packageJson.name} has been linked!`)
    } else {
      error(errorRenderers.FATAL_UNEXPECTED_ERROR())
    }
  })
