import { program } from './program'
import './actions'

export function initProgram () {
  program.parse(process.argv)
}
