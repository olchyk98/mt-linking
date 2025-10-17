import { createErrorBanner } from './create-error-banner'

export const errorRenderers = {
  INSUFFICIENT_INFO_IN_DEST_PACKAGE_JSON () {
    return createErrorBanner({
      tip: 'Did you know? You can specify a custom project folder with the --dest flag.',
      title: 'Program cannot be run here',
      description: `
  The selected folder is not a valid Node.js project.

  Possible reasons:
  - No package.json file found in the directory.
  - The package.json file is missing the required "name" property.

  Please select a valid Node.js project folder and try again.
`,
    })
  },
  SPECIFIED_SOURCE_PACKAGE_IS_NOT_LINKABLE () {
    return createErrorBanner({
      title: 'Specified package is not linkable',
      description: `
  The selected package cannot be linked.

  Possible reasons:
  - The package.json file is missing the required "name" property.
  - The specified package is not installed in the current project.

  Please verify the package details and try again.
`,
    })
  },
  NO_LINKABLE_PACKAGES_FOR_DEST () {
    return createErrorBanner({
      tip: 'Run `oink learn` in the package you want to link, then try again.',
      title: 'No linkable packages found for the project',
      description: `
  No packages can be linked to the selected project.

  Possible reasons:
  - You haven't run 'oink learn' in a package you want to link to this project.
  - The linked package is not installed in the current project.

  Please ensure the correct package is linked and installed before retrying.
`,
    })
  },
  NO_LINKABLE_PACKAGES_SETUP () {
    return createErrorBanner({
      tip: 'Run `oink learn` in the package you want to link, then try again.',
      title: 'Oink\'s packages collection is empty',
      description: `
  Oink doesn't know about any packages yet.  
  Run 'oink learn' in the package you want to link to this project, then and try again.
`,
    })
  },
  NO_LINKING_STRATEGY_AVAILABLE_FOR_SOURCE () {
    return createErrorBanner({
      tip: 'Pull requests and feature requests are welcome and appreciated.',
      title: 'Unsupported Package Type',
      description: `
  The selected package cannot be linked because its  
  type is not currently supported.

  What you can do:
  - Contact the project author for guidance.
  - Submit a feature request.
  - Consider submitting a pull request to add support  
    for this package's transpilation strategy.

  Unfortunately, we cannot proceed with linking at this time.
`,
    })
  },
  FATAL_UNEXPECTED_ERROR () {
    return createErrorBanner({
      title: 'Unexpected Error Occurred',
      description: `
  An unexpected and untraceable error has occurred.  
  This error is not expected and is considered a bug.

  If you're able to reproduce this issue, please submit  
  a bug report with the steps to reproduce.

  We apologize for the inconvenience.
`,
    })
  },
  NO_SOURCE_PACKAGE_SELECTED () {
    return createErrorBanner({
      tip: 'Pull requests and feature requests are welcome and appreciated.',
      title: 'No package to link has been selected',
      description: `
  Seems like the application has been prompted to exit
  without specifying a package to link. 

  If you believe this is a mistake, consider following steps:
  - Try running Oink in another terminal.
  - Try running Oink in another shell (for example, ZSH or FISH).

  If you believe this to be a bug, please submit  
  a bug report with the steps to reproduce.

  We apologize for the inconvenience.
`,
    })
  },
  WORKSPACE_HAS_NO_PACKAGES_TO_LEARN () {
    return createErrorBanner({
      title: 'Workspace has no packages to learn',
      description: `
  Current folder has been identified as a workspace root,
  but the workspace doesn't seem to contain any packages.

  For Oink to identify packages in the workspace,
  your workspace has to follow traditional PNPM/YARN workspaces
  rules. Refer to documentation for more information.
`,
    })
  },
  PACKAGE_IS_NOT_INSTALLED () {
    return createErrorBanner({
      title: 'Current package is not ready to be used',
      description: `
Seems like the package in the current folder does not
have node_modules. Please, run install command through
your package manager (npm/yarn/pnpm).
`,
    })
  },
} satisfies Record<string, (...args: never[]) => string>
