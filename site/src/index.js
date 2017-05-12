import React from 'react'
import ReactDOM from 'react-dom'

import { OtepProvider, themes } from '../../dist'

import Routes from './Routes'


const myTheme = {
  ...themes.standard,
  // extend the standard theme at will!
}


const Root = () =>
  <OtepProvider theme={myTheme}>
    <Routes />
  </OtepProvider>


ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
