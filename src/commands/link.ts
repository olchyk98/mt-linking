import { Command, Flags } from '@oclif/core'

export default class Link extends Command {
  static override description = 'Link one package to another package'
  static override flags = {
    livereload: Flags.boolean({ char: 'l', description: 'When specified, the program will observe new changes and propagate them in live mode' }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Link)
    this.log('Hello, World!', { livereload: flags.livereload === true })
  }
}
