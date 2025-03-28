import fs from 'fs'

const path = 'dbg.txt'
fs.writeFileSync(path, '')

/**
* -----
* The purpose of this function is to push
* DEBUG message (object, string, null, undefined)
* into the logs file.
* */
export function dbg (content: unknown): void {
  const json = typeof content === 'object' ? JSON.stringify(content, null, 2) : content?.toString()
  fs.appendFileSync(path, new Date().toISOString() + ' ')
  fs.appendFileSync(path, json ?? 'undefined')
  fs.appendFileSync(path, '\n-------\n')
}
