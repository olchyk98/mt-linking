import { render } from 'react-blessed'
import React from 'react'
import { spawnScreen } from './src/core'

function Hero () {
  return (
    <layout width="100%" height="100%" layout="inline">
      <listbar
        border="line"
        height={ 3 }
        width="100%"
        label=" Press N "
        keys={ true }
        autoCommandKeys={ true }
        style={{
          selected: { bg: 'yellow' },
        }}
        ref={ (el) => {
          el?.setItems([
            { text: 'a', key: 'a' },
            { text: 'a', key: 'b' },
            { text: 'a', key: 'c' },
          ])
        } }
      >
      </listbar>
      <list
        border="line"
        width="100%"
        ref={ (el) => {
          el?.setItems([ 'a', 'b', 'c' ])
        } }
      >

      </list>
    </layout>
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
