export type LinkingStrategy =
  | 'TRANSPILED' // For frontend and backend packages that produce dist
  | 'TRANSPILED_LEGACY' // For frontend packages that use "yarn build" instead of "yarn transpile"
  | 'AMEND_NATIVE' // For packages that use amend (backend)

