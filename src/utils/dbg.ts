/**
* -----
* Current:
* The purpose of this function is console
* log a message with JSON.stringify applied,
* that will be visible once the program
* is killed.
*
* Obsolete:
* The purpose of this function is to push
* DEBUG message (object, string, null, undefined)
* into the logs file.
* */
export function dbg (content: unknown): void {
  // To see the message, you'll have to kill the process.
  console.log(JSON.stringify(content, null, 2))

  //const path = 'logs/dbg.txt'
  //const json = JSON.stringify(content, null, 2)
  //fs.appendFileSync(path, new Date().toISOString())
  //fs.appendFileSync(path, json)
  //fs.appendFileSync(path, '-------')
}
