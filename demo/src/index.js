import React from 'react'
import ReactDOM from 'react-dom'

import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'

import App from './App'

import './index.css'


const styletronSingleton = new Styletron()


const Root = () =>
  <StyletronProvider styletron={styletronSingleton}>
    <App />
  </StyletronProvider>


ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
