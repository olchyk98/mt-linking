import { spawnShell } from './spawn-shell'

/**
* -----
* Executes shell command in a non-conventional
* way. The promise will always resolve (unless a native
* error occurs), but the output won't contain
* the logs. Instead the output of this function
* is a wrapper object that contains metadata properties,
* such as "errored". The result object contains
* logs (ok/error items) in the "output" property.
* */
export function executeShell (command: string, args: string[] = []): Promise<ExecuteShellResult> {
  const shell = spawnShell(command, args)
  return new Promise(
    (res) => {
      const result: ExecuteShellResult = { errored: false, output: [] }
      shell.stdout.on('data', (data) => {
        result.output.push(data.toString())
      })
      shell.stderr.on('data', (data) => {
        result.output.push(data.toString())
      })
      shell.on('error', (data) => {
        result.errored = true
        result.output.push(data.message)
      })
      shell.on('close', () => {
        res(result)
      })
    },
  )
}

export interface ExecuteShellResult {
  errored: boolean
  output: string[]
}
