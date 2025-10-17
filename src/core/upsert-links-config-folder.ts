import fs from 'fs'
import { LINKS_LOCATION } from '../constants'

/**
* Symlinks for all learned packages must be stored
* in the LINKS_LOCATION folder. This folder works as
* a registry for oink, allowing it to know which packages
* can be linked to the current folder, when executable
* is ran.
*
* This function upserts the folder, ensuring that it
* exists when any sort of operation (symlink create/delete)
* is performed.
* */
export async function upsertLinksConfigFolder (): Promise<void> {
  if (fs.existsSync(LINKS_LOCATION)) return
  fs.mkdirSync(LINKS_LOCATION, { recursive: true })
}
