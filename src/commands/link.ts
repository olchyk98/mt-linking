import { Args, Command, Flags } from '@oclif/core'
import { getLinkablePackagesForPackage } from '../core'
import path from 'path'
import { find, propEq } from 'ramda'

export default class Link extends Command {
  static override description = 'Link one package to another package'

  static override flags = {
    livereload: Flags.boolean({
      char: 'l',
      description: 'When specified, the program will observe new changes and propagate them in live mode'
    }),
    dest: Flags.string({
      char: 'd',
      description: 'Instead of using the current folder, this flag may be used to override which folder the program should treat as destination package',
    })
  }

  static args = {
    from: Args.string({
      char: 't',
      description: 'Name of package to propagate changes from',
      required: true
    })
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Link)
    const { dest = __dirname } = flags
    const absolutePath = path.isAbsolute(dest)
      ? flags.source : path.resolve(__dirname, dest)
    const linkablePackages = getLinkablePackagesForPackage(absolutePath)
    if (linkablePackages == null) {
      return this.error('INSUFFICIENT_INFO_IN_DEST_PACKAGE_JSON')
    }
    const sourcePackage = find((l) => l.name === args.from, linkablePackages)
    if (sourcePackage == null) {
      return this.error('SPECIFIED_FROM_PACKAGE_IS_NOT_LINKABLE')
    }
    this.log(sourcePackage.name)
  }
}
