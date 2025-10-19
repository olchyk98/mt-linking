import os from 'os'
import path from 'path'
import { IFs, fs, vol } from 'memfs'
import { afterEach, beforeEach, vi } from 'vitest'
import { LINKS_LOCATION } from '../src/constants'

vi.mock('fs', async () => ({ default: fs }))

function buildMockFsEnvironment (instance: IFs) {
  // Setup os user directory
  instance.mkdirSync(os.homedir(), { recursive: true })
  // Setup current directory
  instance.mkdirSync('./', { recursive: true })
  // Export helper methods
  const mockFsEnv = {
    packages: {
      init (packages: string[]) {
        const packagesLocation = '/tmp/packages/'
        return packages.map((name) => {
          const packagePath = path.resolve(packagesLocation, name)
          instance.mkdirSync(packagePath, { recursive: true })
          instance.writeFileSync(
            path.resolve(packagePath, 'package.json'),
            `{"name": "${name}"}`,
          )
          return { packagePath, packageName: name }
        })
      },
    },
    linksRegistry: {
      init (packages: string[] = []) {
        instance.mkdirSync(LINKS_LOCATION, { recursive: true })
        if (packages.length > 0) {
          const createdItems = mockFsEnv.packages.init(packages)
          createdItems.forEach(({ packagePath, packageName }) => {
            const linkPath = path.resolve(LINKS_LOCATION, packageName)
            instance.mkdirSync(path.resolve(linkPath, '../'), { recursive: true })
            instance.symlinkSync(packagePath, linkPath)
          })
        }
      },
      get content () {
        try { mockFsEnv.linksRegistry.init() } catch {}
        return instance.readdirSync(LINKS_LOCATION) as string[]
      },
      get exists () {
        return instance.existsSync(LINKS_LOCATION)
      },
    },
  }
  return mockFsEnv
}

/** NOTE: Has to be called inside of "describe" */
export function setupMockFsLifecycle () {
  // Must not be accessed outside of "it".
  const env = {
    fs,
    vol,
    env: null as unknown as ReturnType<typeof buildMockFsEnvironment>,
  }

  beforeEach(() => {
    env.env = buildMockFsEnvironment(fs)
  })

  afterEach(() => {
    vol.reset()
  })

  return env
}

