import { Command } from 'commander'

export const program = new Command()

program
  .name('Oink')
  .description(
    'This is the right tool for linking. Reduce pain - increase productivity.',
  )
  .version('1.0.1', '-v, --version', 'output the current version of the application')

