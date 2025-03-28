import { all } from 'ramda'

/**
* -----
* The function compares two values and
* returns true if those are the same.
*
* The function can handle primitive
* types like numbers and strings,
* as well as objects and arrays.
*
* When it comes to objects,
* the function performance memory
* address comparison. Meaning,
* the function won't compare by object contents.
*
* When it comes to arrays,
* the function will check
* if each value present in array A,
* exists in array B. If the items
* are object, memory address comparison
* will be performed on those.
* */
export function compareValues (a: unknown, b: unknown): boolean {
  if (typeof a !== typeof b) return false
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    return !a.length || all((l) => b.includes(l), a)
  }
  return a === b
}
