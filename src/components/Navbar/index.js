/**
 * Navbar
 */


import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import { styled, propTypeBrandOrDefaultOrLightOrDark } from '../../utils'

import { breakpoint, margin } from '../../mixins'

import AtLeft from '../AtLeft'
import AtRight from '../AtRight'
import AtCenter from '../AtCenter'

import BrandBackground from '../BrandBackground'


const Wrapper = styled(BrandBackground)((p, t) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'stretch',
  height: t.navbarHeight,
  textAlign: 'center',
  // backgroundColor: 'white',
  // zIndex: 10;
}))


const LeftOrRightBase = styled.div((p, t) => ({
  flexGrow: 1,
  flexShrink: 0,

  display: 'flex',
  alignItems: 'stretch',

  maxWidth: '100%',
  overflow: 'auto',

  ...breakpoint(t, 'widescreen', {
    flexBasis: 0,
  }),
}))

const Left = styled(LeftOrRightBase)({
  justifyContent: 'flex-start',
  whiteSpace: 'nowrap',
})

const Right = styled(LeftOrRightBase)({
  justifyContent: 'flex-end',
})


const Center = styled.div({
  flexGrow: 0,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  ...margin(null, 'auto'),
})


export default function Navbar({ brand, children }) {
  const { left, center, right } = React.Children.toArray(children).reduce((acc, child) => {
    if (child.type === AtLeft) {
      invariant(
        !acc.left,
        'Navbar must have at most one AtLeft',
      )

      return { ...acc, left: child.props.children }
    } else if (child.type === AtRight) {
      invariant(
        !acc.right,
        'Navbar must have at most one AtRight',
      )

      return { ...acc, right: child.props.children }
    } else if (child.type === AtCenter) {
      invariant(
        !acc.center,
        'Navbar must have at most one AtCenter',
      )

      return { ...acc, center: child.props.children }
    }

    invariant(
      false,
      'Navbar children must be of types AtLeft, AtRight, or AtCenter',
    )

    // not reachable
    return acc
  }, { left: null, right: null, center: null })

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
