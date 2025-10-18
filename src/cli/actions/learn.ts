import { commandLearnHandler } from '../../commands'
import { program } from '../program'

program
  .command('learn')
  .description('Link one package to another package')
  .argument('[pattern]', 'Optional pattern to match package.json files against. Allows to link multiple packages at once')
  .action(commandLearnHandler)
