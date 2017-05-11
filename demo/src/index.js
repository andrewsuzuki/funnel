import React from 'react'
import ReactDOM from 'react-dom'

import { Otep, themes } from '../../dist'

import App from './App'


const myTheme = {
  ...themes.standard,
  // extend the standard theme at will!
}


const Root = () =>
  <Otep theme={myTheme}>
    <App />
  </Otep>


ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
