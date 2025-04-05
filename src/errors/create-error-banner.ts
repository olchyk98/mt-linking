import chalk from 'chalk'

/**
 * Taking opts will produce a fancy
 * banner describing the error.
 *
 * WARNING: The banner may contain
 * more than one line in content.
 * */
export function createErrorBanner (opts: ErrorBannerConstructorOpts) {
  let acc = `
───────────────────────────────────────────────
  ${chalk.redBright(`❌ ERROR: ${opts.title}`)}
───────────────────────────────────────────────
${opts.description}
`
  acc += '───────────────────────────────────────────────'
  if (opts.tip != null) {
    acc += `
  ${chalk.gray(`💡 Tip: ${opts.tip}`)}
───────────────────────────────────────────────
    `
  }
  return acc
}

export interface ErrorBannerConstructorOpts {
  title: string
  description: string
  /**
   * Option indicates whether to include
   * custom/random tip in the banner.
   *
   * TODO: Random tips are not currently supported.
   * */
  tip?: string
}
