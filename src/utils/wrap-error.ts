export function wrapError (error: string | number | Error): Error {
  if (typeof error === 'object') return error
  return new Error(error.toString())
}
