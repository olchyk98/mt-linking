/**
* -----
* Array of glob patterns that will
* be used by the linker. The
* payloads will be used as trigger for
* the re-linking algorithm.
*
* Every time one of those patterns
* get triggered (by create/update/delete
* events in file system), re-linking
* will occur on the Linker level.
* */
export const TRANSPILE_TRIGGERS: string[] = [
  '**/*.json',
  '**/*.js',
  '**/*.ts',
  '**/*.jsx',
  '**/*.tsx',
  '**/*.html',
]

export const TRANSPILE_IGNORE: string[] = [
  'node_modules',
  'dist',
  'package-lock.json',
  'yarn.lock',
]

export const KEYMAP: Record<KeyAction, string> = {
  CREATE_NEW_LINK: 'n',
}

export type KeyAction =
  | 'CREATE_NEW_LINK'
