import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider, theme, injectAllGlobal } from '../../dist'

import App from './App'

injectAllGlobal()

import './index.css'



const Root = () =>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
