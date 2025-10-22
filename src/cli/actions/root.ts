import { commandLinkHandler } from '../../commands'
import { program } from '../program'

// TODO: Write tests with memfs
// TODO: Write unit tests that been reset with memfs (mock-fs)
// TODO: Merge "cli" and "ui"
// TODO: Sort fzf packages based on how often they get linked
// TODO: Introduce --banner
// TODO: Merge constant files
// TODO: Switch to Github Actions for CI
// TODO: Deprecate "--dest" (i feel like process.cwd() calls will break it)
// TODO: Determine whether to use pnpm or yarn based on corepack settings (putting on hold, since this is a non issue)

program
  .description('Link one package to another package')
  .argument('[package]', 'Name of package to propagate changes from')
  .option('-d, --dest [string]')
  .option('--livereload', 're-link automatically on every file change')
  .option('--reprompt', 'restart oink after linking job has completed')
  .option('--debounce [number]', 'delay (ms) how quickly oink reacts to new changes when running with --livereload', (n) => (Number(n) || undefined))
  .action(commandLinkHandler)

