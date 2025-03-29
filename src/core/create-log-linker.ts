import chalk from 'chalk'
import type { Command } from '@oclif/core'

export function createLogLinker(this: Pick<Command, 'log'>) {
  return (message: string): void => {
    const payload = chalk.bgYellow.black(`[LINKER]: ${message}`)
    this.log(payload)
  }
}
