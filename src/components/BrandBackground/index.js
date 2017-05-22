/**
 * BrandBackground
 */


import React from 'react'
import PropTypes from 'prop-types'
import color from 'color'
import { withTheme } from 'glamorous'
import memoize from 'lodash.memoize'
import merge from 'lodash.merge'

import { styled, propTypeBrandOrDefaultOrLightOrDark, BackgroundContext, connectBackgroundContext } from '../../utils'


const generateGradientColor = (baseColor, rotate, saturate, darken) =>
  color(baseColor)
    .rotate(rotate)
    .saturate(saturate)
    .darken(darken)
    .hsl()
    .string()


const boldGradientStyle = memoize((baseColor) => {
  const gradientTopLeft = generateGradientColor(baseColor, -10, 0.1, 0.1)
  const gradientBottomRight = generateGradientColor(baseColor, 10, 0.05, 0.05)

  return `linear-gradient(141deg, ${gradientTopLeft} 0%, \
${baseColor} 71%, ${gradientBottomRight} 100%)`
})


const BrandBackgroundDiv = connectBackgroundContext(styled.div((props) => {
  const { forceBackground, backgroundContext, bold } = props

  const { backgroundColor, textColor } = backgroundContext

  const background = bold
    ? { backgroundImage: boldGradientStyle(backgroundColor) }
    : { backgroundColor }

  return {
    color: textColor,
    ...((forceBackground && { background: forceBackground }) || background),
  }
}))

const BrandBackground = withTheme((props) => {
  const { makeBackgroundContexts, bold, brand, theme, children, ...restProps } = props

  const backgroundContextProps = {
    ...(makeBackgroundContexts ? makeBackgroundContexts(theme) : theme.backgroundContexts)[brand],
  }

  return (
    <BackgroundContext {...backgroundContextProps}>
      <BrandBackgroundDiv
        bold={bold}
        forceBackground={brand === 'default' && 'transparent'}
        {...restProps}
      >
        {children}
      </BrandBackgroundDiv>
    </BackgroundContext>
  )
})

BrandBackground.propTypes = {
  makeBackgroundContexts: PropTypes.func,
  bold: PropTypes.bool.isRequired, // has default
  brand: propTypeBrandOrDefaultOrLightOrDark.isRequired, // has default
  theme: PropTypes.object,
  children: PropTypes.node,
}

BrandBackground.defaultProps = {
  bold: false,
  brand: 'default',
}

export default BrandBackground
