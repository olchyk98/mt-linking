import { Command } from 'commander'
import process from 'process'

export const program = new Command()

program
  .name('OLink')
  .description(
    'This is the right tool for linking. Reduce pain - increase productivity.',
  )
  .version('0.0.1')

export function initProgram () {
  program.parse(process.argv)
}
