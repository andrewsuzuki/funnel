import React from 'react'
import ReactDOM from 'react-dom'

import { OtepProvider, themes } from '../../dist'

import App from './App'


const myTheme = {
  ...themes.standard,
  // extend the standard theme at will!
}


const Root = () =>
  <OtepProvider theme={myTheme}>
    <App />
  </OtepProvider>


ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
