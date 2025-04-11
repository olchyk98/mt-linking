declare module 'node-fzf' {
  /**
   * TODO: Extended types here and a PR to https://www.npmjs.com/package/node-fzf
   * would be appreciated. Not really in the mood right now to type
   * out the entire package, but it must be done at some point.
   * */

  export interface NodeFzfTrait {
    (opts: NodeFzfOpts): Promise<NodeFzfResult>
  }

  export interface NodeFzfOpts {
    list: string[]
    mode?: 'fuzzy' | 'normal'
    query?: string
    selectOne?: boolean,
    height?: number
    prelinehook?: (index: number) => string
    postlinehook?: (index: number) => string
  }

  export interface NodeFzfResult {
    query?: string
    selected?: NodeFzSelection
  }

  export interface NodeFzSelection {
    value: string
  }

  const nodeFzf: NodeFzfTrait
  export default nodeFzf
}
