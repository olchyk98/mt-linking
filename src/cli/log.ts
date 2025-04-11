import chalk from 'chalk'
import { log } from './lifecycle'

export function logAsLinker (message: string) {
  const payload = chalk.bgGreen.black(`[OLINK]: ${message}`)
  log(payload)
}

export function warnAsLinker (message: string) {
  const payload = chalk.bgYellow.black(`[OLINK]: ${message}`)
  log(payload)
}

export function errorAsLinker (message: string) {
  const payload = chalk.bgRed.white(`[OLINK][ERROR]: ${message}`)
  log(payload)
}
