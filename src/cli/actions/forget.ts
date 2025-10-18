import { commandForgetHandler } from '../../commands'
import { program } from '../program'

program
  .command('forget')
  .description('Reset all learned packages')
  .action(commandForgetHandler)
