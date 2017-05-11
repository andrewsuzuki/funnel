import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider, themes } from '../../dist'

import App from './App'


const myTheme = {
  ...themes.standard,
  // extend the standard theme at will!
}


const Root = () =>
  <ThemeProvider theme={myTheme}>
    <App />
  </ThemeProvider>


ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
