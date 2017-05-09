import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider, theme } from '../../dist'

import App from './App'

import './index.css'


const Root = () =>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
