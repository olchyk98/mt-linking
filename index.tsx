import { render } from 'react-blessed'
import React from 'react'
import { spawnScreen } from './src/core'

function Hero () {
  return (
    <element width="100%" height="100%">
      <listbar
        border="line"
        width="100%"
        height={ 3 }
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
        top={ 3 }
        width="100%"
        ref={ (el) => {
          el?.setItems([ 'a', 'b', 'c' ])
        } }
      >

      </list>
    </element>
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
