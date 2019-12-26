import React from './React'
import { render } from 'react-dom'
import * as test from './middleware.ts'

console.log(test)
function App() {
  return (
    <div>{ 1 }</div>
  )
}
render(
  <App />,
  document.getElementById('root')
)
