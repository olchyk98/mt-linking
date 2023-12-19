export function panic (error: string | Error): never {
  console.log(`PANIC: ${error}`)
  const errorInstance = typeof error === 'object' ? error : new Error(error)
  throw errorInstance
}
