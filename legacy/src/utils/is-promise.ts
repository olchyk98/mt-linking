export function isPromise <T> (obj: unknown | Promise<T>): obj is Promise<T> {
  return obj instanceof Promise
}
