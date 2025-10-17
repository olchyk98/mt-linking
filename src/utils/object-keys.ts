/**
* Providing abstraction over Object.keys,
* since Object.keys has types that are too
* wide.
* */
export function objectKeys<T extends object> (u: T): Array<keyof T> {
  return Object.keys(u) as never
}
