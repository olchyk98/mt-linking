import fs from 'fs'
import path from 'path'
import { LINKS_LOCATION } from '../../constants'
import { upsertLinksConfigFolder } from '../../core'
import { logAsLinker } from '../../utils'

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

export function commandForgetHandler () {
  upsertLinksConfigFolder()
  deleteLinksFolder()
  logAsLinker('Done!')
}
