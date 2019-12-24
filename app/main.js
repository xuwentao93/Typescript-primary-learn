import React from 'react'
import { render } from 'react-dom'
import hello from './hello.ts'

function App() {
  return (
    <div>{hello}</div>
  )
}
render(
  <App />,
  document.getElementById('root')
)
