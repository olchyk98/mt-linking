import { type ExecOptions, exec } from 'child_process'

export async function executeShell (command: string, args: string[], opts: ExecOptions = {}): Promise<string> {
  const fullCommand = `${command} ${args.join(' ')}`
  return new Promise((res, rej) => {
    exec(
      fullCommand,
      opts,
      (error, stdout, stderr) => {
        if (error != null) {
          rej(error)
        } else {
          res(stdout.toString() || stderr.toString())
        }
      },
    )
  })
}
