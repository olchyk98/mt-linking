import { has } from 'ramda'

export function isPromise <T> (obj: unknown | Promise<T>): obj is Promise<T> {
  return has('then', obj)
}
