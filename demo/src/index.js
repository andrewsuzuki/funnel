import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider, theme, injectAllGlobal } from '../../dist'

import App from './App'


// Inject reset and base styles
injectAllGlobal(theme)


const Root = () =>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
