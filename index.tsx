import { render } from 'react-blessed'
import React from 'react'
import { spawnScreen } from './src/core'

function Hero () {
  return (
    <box
      top="center"
      left="center"
      width="100%"
      height="100%"
    >
      <listbar
        border="line"
        width="100%"
        height={ 3 }
        label=" Press N "
        style={{
          selected
        }}
        ref={ (el) => {
          el?.setItems([ { text: 'a', key: 'a' } ])
        } }
      >
      </listbar>
    </box>
  )
}

function main () {
  const screen = spawnScreen()
  render(<Hero />, screen)
}

try {
  main()
} catch (e) {
  console.error(e)
  console.info('Panic.')
  process.exit(1)
}
