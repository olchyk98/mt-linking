import { spawnShell } from './spawn-shell'

export function executeShell (command: string, args: string[] = []): Promise<string[]> {
  const shell = spawnShell(command, args)
  return new Promise(
    (res, rej) => {
      const output: string[] = []
      shell.stdout.on('data', (data) => {
        output.push(data)
      })
      shell.stderr.on('data', (error) => {
        rej(error)
      })
      shell.on('close', () => {
        res(output)
      })
    },
  )
}
