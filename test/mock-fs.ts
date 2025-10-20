import os from 'os'
import yaml from 'yaml'
import path from 'path'
import { IFs, Volume, fs, vol } from 'memfs'
import { afterEach, beforeEach, vi } from 'vitest'
import { LINKS_LOCATION } from '../src/constants'

vi.mock('fs', async () => ({
  // Overriding "cpSync": https://github.com/streamich/memfs/issues/1088
  default: Object.assign(fs, { cpSync: vol.cpSync }),
}))

function buildMockFsEnvironment () {
  // Setup os user directory
  fs.mkdirSync(os.homedir(), { recursive: true })
  // Setup current directory
  fs.mkdirSync('./', { recursive: true })
  // Export helper methods
  const mockFsEnv = {
    cwd: {
      cd (p: string) {
        vi.spyOn(process, 'cwd').mockReturnValue(p)
      },
    },
    packages: {
      /**
      * Easy shortcut for creating a file in specified
      * folder. Doesn't run integrity check and therefore
      * may be used outside of package structure. At
      * the same allows to quickly create files, without
      * care about existing folders structure.
      * */
      createFile (packageLocation: string, fileLocation: string, content: string) {
        fs.mkdirSync(packageLocation, { recursive: true })
        fs.writeFileSync(path.resolve(packageLocation, fileLocation), content)
      },
      /**
      * Easy shortcut for creating a folders in specified
      * folder. Doesn't run integrity check and therefore
      * may be used outside of package structure. At
      * the same allows to quickly create folders, without
      * care about existing structure.
      * */
      createFolders (packageLocation: string, folderLocations: string[]) {
        fs.mkdirSync(packageLocation, { recursive: true })
        folderLocations.forEach((loc) => {
          fs.mkdirSync(path.resolve(packageLocation, loc))
        })
      },
      /**
      * Sets up barebone package.json in the specified location.
      * Does not perform installation of node_modules (run "installDependenciesFor"),
      * nor sets up dependencies or version (run "updatePackageJson").
      * */
      initSingleInFolder (name: string, location: string) {
        mockFsEnv.packages.createFile(location, 'package.json', `{"name": "${name}"}`)
        return { packagePath: location, packageName: name }
      },
      /**
      * Bulk method for "initSingleInFolder", allowing to quickly
      * setup multiple bare bone packages in one folder.
      * */
      initMultipleInFolder (packages: string[], packagesLocation: string) {
        return packages.map((name) => {
          const packagePath = path.resolve(packagesLocation, name)
          return mockFsEnv.packages.initSingleInFolder(name, packagePath)
        })
      },
      /**
      * Sets up minimalistic pnpm workspace with specified packages,
      * by introducing root and child packages, and making them
      * identifiable through pnpm-workspace.yaml.
      * */
      initPNPMWorkspace (packages: string[], workspaceLocation: string) {
        const root = mockFsEnv.packages.initSingleInFolder('testspace', workspaceLocation)
        const children = mockFsEnv.packages.initMultipleInFolder(packages, workspaceLocation)
        const workspaceYamlPath = path.resolve(workspaceLocation, 'pnpm-workspace.yaml')
        const workspaceYamlContent = yaml.stringify({ packages })
        fs.writeFileSync(workspaceYamlPath, workspaceYamlContent)
        return [ root, ...children ]
      },
      /**
      * Sets up minimalistic yarn workspace with specified packages,
      * by introducing root and child packages, and making them
      * identifiable through root package.json "workspaces" property.
      * */
      initYarnWorkspace (packages: string[], workspaceLocation: string) {
        mockFsEnv.packages.initSingleInFolder('testspace', workspaceLocation)
        mockFsEnv.packages.initMultipleInFolder(packages, workspaceLocation)
        mockFsEnv.packages.updatePackageJson(
          workspaceLocation,
          (old) => ({ ...old, workspaces: packages }),
        )
      },
      /**
      * Allows to modify package.json in a package with respect
      * to existing content. Accepting "getNewContent" works as
      * constructor of new content for the package.json in the
      * specified package path.
      *
      * WARNING: No integrity check will be performed, so if there's
      * no package at the path, the function may blow up.
      * */
      updatePackageJson (
        packagePath: string,
        getNewContent: (oldContent: Record<keyof never, unknown>) => Record<keyof never, unknown>,
      ) {
        const packageJsonPath = path.resolve(packagePath, 'package.json')
        const packageJsonContent = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8') as string)
        const updatedContent = getNewContent(packageJsonContent)
        fs.writeFileSync(packageJsonPath, JSON.stringify(updatedContent))
      },
      /**
      * Creates node_modules in the specified path and creates
      * minimalistic packages with "initMultipleInFolder" in there.
      * This allows to mimic installed packages.
      * */
      installDependenciesFor (packagePath: string) {
        const packageJsonPath = path.resolve(packagePath, 'package.json')
        const { dependencies = {} } = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8') as string)
        const nodeModulesPath = path.resolve(packagePath, 'node_modules')
        fs.mkdirSync(path.resolve(packagePath, 'node_modules'))
        mockFsEnv.packages.initMultipleInFolder(Object.keys(dependencies), nodeModulesPath)
      },
    },
    linksRegistry: {
      /**
      * Sets up links registry with symlinks to
      * packages that are already created.
      * */
      initWithPaths (packages: Array<{ packagePath: string, packageName: string }> = []) {
        fs.mkdirSync(LINKS_LOCATION, { recursive: true })
        packages.forEach(({ packagePath, packageName }) => {
          const linkPath = path.resolve(LINKS_LOCATION, packageName)
          fs.mkdirSync(path.resolve(linkPath, '../'), { recursive: true })
          fs.symlinkSync(packagePath, linkPath)
        })
        return packages
      },
      /**
      * Sets up links registry with symlinks to
      * packages created in "tmp" folder.
      * */
      init (packages: string[] = []) {
        const createdItems = mockFsEnv.packages.initMultipleInFolder(packages, '/tmp/packages')
        return mockFsEnv.linksRegistry.initWithPaths(createdItems)
      },
      /**
      * Returns list of symlinks currently existing
      * in links registry (.config folder).
      * */
      get content () {
        try { mockFsEnv.linksRegistry.init() } catch {}
        return fs.readdirSync(LINKS_LOCATION) as string[]
      },
      /**
      * Returns a boolean indicating if links registry
      * is already setup. The boolean indicates if the
      * registry folder .config exists.
      * */
      get exists () {
        return fs.existsSync(LINKS_LOCATION)
      },
    },
  }
  return mockFsEnv
}

/** NOTE: Has to be called inside of "describe", but outside of "it". */
export function getMockFs () {
  // Must not be accessed outside of "it".
  const mockFs = {
    fs,
    vol,
    env: null as unknown as MockFsEnv['env'],
  }

  beforeEach(() => {
    mockFs.env = buildMockFsEnvironment()
  })

  afterEach(() => {
    vi.resetAllMocks()
    vol.reset()
  })

  return mockFs
}

export interface MockFsEnv {
  fs: IFs,
  vol: Volume,
  env: ReturnType<typeof buildMockFsEnvironment>
}
