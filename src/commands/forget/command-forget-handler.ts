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
  // XXX: Delete the folder if it's empty. This is
  // helpful, when we're forgetting packages that
  // are part of a space (like "@svelte/react").
  if (fs.readdirSync(dir).length <= 0) {
    fs.rmdirSync(dir)
  }
}

export async function commandForgetHandler () {
  upsertLinksConfigFolder()
  deleteLinksFolder()
  logAsLinker('Done!')
}
