export function debounceFn<T extends (...args: never[]) => void>(fn: T, debounceMs: number): T {
  let timer: NodeJS.Timeout | null = null

  const debouncedFn = (...args: Parameters<T>) => {
    if(timer != null) clearTimeout(timer)
    timer = setTimeout(() => { fn(...args) }, debounceMs)
  }

  return debouncedFn as T
}
