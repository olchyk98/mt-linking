import chalk from 'chalk'
import { log } from './lifecycle'

export function logAsLinker(message: string) {
  const payload = chalk.bgYellow.black(`[LINKER]: ${message}`)
  log(payload)
}
