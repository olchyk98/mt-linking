import process from 'process'

export function log (...args: unknown[]): void {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...args)
  }
}

export function error (error: string | Error): never {
  console.error(error)
  process.exit(1)
}
