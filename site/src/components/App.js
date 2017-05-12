import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'


const App = ({ children }) =>
  <div>
    <Header />
    {children}
    <Footer />
  </div>

App.propTypes = {
  children: PropTypes.node,
}

export default App
