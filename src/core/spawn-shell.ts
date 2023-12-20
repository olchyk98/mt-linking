import { ChildProcessWithoutNullStreams, spawn } from 'child_process'

export function spawnShell (command: string, args: string[] = []): ChildProcessWithoutNullStreams {
  const shell = spawn(command, args)
  return shell
}
