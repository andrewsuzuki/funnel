/**
 * Navbar
 */

import React from 'react'
import PropTypes from 'prop-types'

import { propTypeBrandOrDefaultOrLightOrDark } from '../../utils'

import Wrapper from './Wrapper'
import Left from './Left'
import Right from './Right'
import Center from './Center'

import partMapper from './partMapper'


export default function Navbar({ brand, children }) {
  const { left, center, right } = partMapper(children)

  // The two LeftOrRight need to be in place regardless of whether we have
  // a left/right so that the center is positioned in the center with flexbox
  return (
    <Wrapper brand={brand}>
      <Left>{left}</Left>
      {center && <Center>{center}</Center>}
      <Right>{right}</Right>
    </Wrapper>
  )
}

Navbar.propTypes = {
  brand: propTypeBrandOrDefaultOrLightOrDark.isRequired, // has default
  children: PropTypes.node,
}

Navbar.defaultProps = {
  brand: 'default',
}
