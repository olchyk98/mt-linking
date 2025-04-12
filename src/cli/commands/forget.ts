import fs from 'fs'
import path from 'path'
import { logAsLinker } from '../log'
import { program } from '../program'
import { LINKS_LOCATION } from '../../constants'

function deleteLinksFolder (dir = LINKS_LOCATION) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const entryPath = path.resolve(dir, entry.name)
    if (entry.isDirectory()) {
      deleteLinksFolder(entryPath)
    } else {
      fs.unlinkSync(entryPath)
    }
  }
}

program
  .command('forget')
  .description('Reset all learned packages')
  .action(() => {
    deleteLinksFolder()
    logAsLinker('Done!')
  })
