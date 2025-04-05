import process from 'process'
import { program } from '../../program'
import { logAsLinker } from '../../log-as-linker'
import { error } from '../../lifecycle'
import { getPackageAtPath, linkPackage } from '../../../core'

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
      error('PACKAGE_MISSING_AT_CWD')
    }
    if (linkPackage(packageToLink)) {
      logAsLinker(`${packageToLink.packageJson.name} has been linked!`)
    } else {
      error('WEIRD_CASE_2')
    }
  })
