/**
 * Navbar
 */

import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'

import { propTypeBrandOrDefaultOrLightOrDark } from '../../utils'

import Wrapper from './Wrapper'
import Left from './Left'
import Right from './Right'
import Center from './Center'

import partMapper from './partMapper'


const makeBackgroundContexts = (theme) => merge({}, theme.backgroundContexts, {
  default: {
    linkColor: theme.white,
    linkHoverColor: theme.white,
    linkActiveColor: theme.white,
  },
  light: {
    linkColor: theme.navbarLinkColor,
    linkHoverColor: theme.navbarLinkColorHover,
    linkActiveColor: theme.navbarLinkColorHover,
  },
  dark: {
    linkColor: theme.white,
    linkHoverColor: theme.white,
    linkActiveColor: theme.white,
  },
})


export default function Navbar({ brand, bold, children }) {
  const { left, center, right } = partMapper(children)

  // The two LeftOrRight need to be in place regardless of whether we have
  // a left/right so that the center is positioned in the center with flexbox
  return (
    <Wrapper brand={brand} bold={bold} makeBackgroundContexts={makeBackgroundContexts}>
      <Left>{left}</Left>
      {center && <Center>{center}</Center>}
      <Right>{right}</Right>
    </Wrapper>
  )
}

Navbar.propTypes = {
  brand: propTypeBrandOrDefaultOrLightOrDark.isRequired, // has default
  bold: PropTypes.bool, // has default
  children: PropTypes.node,
}

Navbar.defaultProps = {
  brand: 'default',
  bold: false,
}
