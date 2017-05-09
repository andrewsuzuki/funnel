/**
 * Hero
 */


import React from 'react'
import PropTypes from 'prop-types'

import {
  styled,
  propTypeSize,
  propTypeBrandOrDefaultOrLightOrDark,
} from '../../utils'

import BrandBackground from '../BrandBackground'
import Container from '../Container'


const WrapperWithBackground = styled(BrandBackground)({
  display: 'flex',
  alignItems: 'center',
})


const VerticalPadding = styled.div(({ amount }) => ({
  width: '100%',
  paddingTop: amount,
  paddingBottom: amount,
}))


const sizePaddingMap = {
  normal: '8rem',
  small: '3rem',
  large: '12rem',
}


export default function Hero({ fluid, size, bold, brand, children }) {
  const padding = sizePaddingMap[size] || 0

  return (
    <WrapperWithBackground bold={bold} brand={brand}>
      <VerticalPadding amount={padding}>
        <Container fluid={fluid}>
          {children}
        </Container>
      </VerticalPadding>
    </WrapperWithBackground>
  )
}

Hero.propTypes = {
  fluid: PropTypes.bool,
  size: propTypeSize,
  brand: propTypeBrandOrDefaultOrLightOrDark,
  bold: PropTypes.bool,

  children: PropTypes.node,
}

Hero.defaultProps = {
  fluid: false,
  size: 'normal',
  brand: 'default',
  bold: false,
}
