export function stripSuffix(str: string, suffix: string): string {
  if (suffix.length > 0 && str.endsWith(suffix)) {
    return str.slice(0, str.length - suffix.length)
  }
  return str
}
