import { spawn } from 'child_process'
import { PassThrough, type Readable } from 'stream'

export function executeShellWithStream (command: string, args: string[]): Readable {
  const readStream = new PassThrough({ objectMode: true })
  const shell = spawn(command, args)
  shell.stdout.on('data', (data) => {
    readStream.push(data.toString())
  })
  shell.stderr.on('data', (data) => {
    readStream.push(data.toString())
  })
  shell.on('error', (error) => {
    readStream.emit('error', error)
  })
  shell.on('close', () => {
    readStream.end()
  })
  return readStream
}
