import React from 'react'
import PropTypes from 'prop-types'

import {
  Stickler,
  AtBottom,
} from '../../../dist'

import Header from './Header'
import Footer from './Footer'


const App = ({ children }) =>
  <Stickler>
    <Header />
    {children}
    <AtBottom>
      <Footer />
    </AtBottom>
  </Stickler>

App.propTypes = {
  children: PropTypes.node,
}

export default App
