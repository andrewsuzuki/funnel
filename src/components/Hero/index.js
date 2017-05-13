/**
 * Hero
 */


import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import {
  styled,
  propTypeSize,
  propTypeBrandOrDefaultOrLightOrDark,
} from '../../utils'

import BrandBackground from '../BrandBackground'
import Container from '../Container'

import AtTop from '../AtTop'
import AtBottom from '../AtBottom'


const WrapperWithBackground = styled(BrandBackground)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'space-between',
})


const TopOrBottom = styled.div({
  flexGrow: 0,
  flexShrink: 0,
})


const CenterWithPadding = styled.div(({ padding }) => ({
  flexGrow: 1,
  flexShrink: 0,

  display: 'flex',
  alignItems: 'center',

  paddingTop: padding,
  paddingBottom: padding,
}))

CenterWithPadding.propTypes = {
  padding: PropTypes.string.isRequired,
}


const sizePaddingMap = {
  normal: '8rem',
  small: '3rem',
  large: '12rem',
}


export default function Hero({ fluid, size, bold, brand, children }) {
  const padding = sizePaddingMap[size]

  const { top, bottom, rest } = React.Children.toArray(children).reduce((acc, child) => {
    if (child.type === AtBottom) {
      invariant(
        !acc.bottom,
        'Stickler must have at most one AtBottom',
      )

      return { ...acc, bottom: child.props.children }
    } else if (child.type === AtTop) {
      invariant(
        !acc.top,
        'Stickler must have at most one AtTop',
      )

      return { ...acc, top: child.props.children }
    }

    return { ...acc, rest: [...acc.rest, child] }
  }, { top: null, bottom: null, rest: [] })

  return (
    <WrapperWithBackground bold={bold} brand={brand}>
      {top && <TopOrBottom>{top}</TopOrBottom>}
      <CenterWithPadding padding={padding}>
        <Container fluid={fluid}>
          {rest}
        </Container>
      </CenterWithPadding>
      {bottom && <TopOrBottom>{bottom}</TopOrBottom>}
    </WrapperWithBackground>
  )
}

Hero.propTypes = {
  fluid: PropTypes.bool, // has default
  size: propTypeSize, // has default
  brand: propTypeBrandOrDefaultOrLightOrDark, // has default
  bold: PropTypes.bool, // has default

  children: PropTypes.node,
}

Hero.defaultProps = {
  fluid: false,
  size: 'normal',
  brand: 'default',
  bold: false,
}
