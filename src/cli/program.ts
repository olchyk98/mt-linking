import { Command } from 'commander'
import process from 'process'

export const program = new Command()

program
  .name('Oink')
  .description(
    'This is the right tool for linking. Reduce pain - increase productivity.',
  )
  .version('0.0.11', '-v, --version', 'output the current version of the application')

export function initProgram () {
  program.parse(process.argv)
}
