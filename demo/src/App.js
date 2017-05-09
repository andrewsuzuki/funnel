import React, { Component } from 'react'

import {  } from '../../dist'

import HeroExample from './HeroExample'
import GridFormExample from './GridFormExample'
import ButtonExample from './ButtonExample'


class App extends Component {
  render() {
    return (
      <div>
        <HeroExample />
        <GridFormExample />
        <ButtonExample />
      </div>
    )
  }
}

export default App
