/**
 * BrandBackground
 */


import React from 'react'
import PropTypes from 'prop-types'
import color from 'color'
import { withTheme } from 'glamorous'

import { styled, propTypeBrandOrDefaultOrLightOrDark, BackgroundContext } from '../../utils'


const generateGradientColor = (baseColor, rotate, saturate, darken) =>
  color(baseColor)
    .rotate(rotate)
    .saturate(saturate)
    .darken(darken)
    .hsl()
    .string()


const boldGradientStyle = (baseColor) => {
  const gradientTopLeft = generateGradientColor(baseColor, -10, 0.1, 0.1)
  const gradientBottomRight = generateGradientColor(baseColor, 10, 0.05, 0.05)

  return `linear-gradient(141deg, ${gradientTopLeft} 0%, \
${baseColor} 71%, ${gradientBottomRight} 100%)`
}


const normalBrandMap = {
  default: ['transparent', 'baseTextColor', 'linkColor'],
  light: ['grayLightest', 'baseTextColor', 'linkColor'],
  dark: ['grayDark', 'white', 'linkColor'],
  primary: ['brandPrimary', 'white', 'grayLight'],
  success: ['brandSuccess', 'white', 'grayLight'],
  info: ['brandInfo', 'white', 'grayLight'],
  warning: ['brandWarning', 'white', 'grayLight'],
  danger: ['brandDanger', 'white', 'grayLight'],
}


const boldBrandMap = {
  ...normalBrandMap,
  dark: ['gray', 'white', 'linkColor'], // tweak 'dark' background color (lighter)
}


const BrandBackgroundDiv = styled.div(({ bold, brand }, t) => {
  const [themeBackgroundColor, themeColor] = bold
    ? boldBrandMap[brand]
    : normalBrandMap[brand]

  return {
    color: t[themeColor],
    ...(bold
      ? { backgroundImage: boldGradientStyle(t[themeBackgroundColor]) }
      : { backgroundColor: t[themeBackgroundColor] }),
  }
})

const BrandBackground = withTheme(({ bold, brand, theme, ...restProps }) => {
  const [themeBackgroundColor, themeColor, themeLinkColor] = bold
    ? boldBrandMap[brand]
    : normalBrandMap[brand]

  return (
    <BackgroundContext
      backgroundColor={theme[themeBackgroundColor]}
      textColor={theme[themeColor]}
      linkColor={theme[themeLinkColor]}
    >
      <BrandBackgroundDiv {...{ bold, brand, ...restProps }} />
    </BackgroundContext>
  )
})

BrandBackground.propTypes = {
  brand: propTypeBrandOrDefaultOrLightOrDark.isRequired, // has default
  bold: PropTypes.bool.isRequired, // has default
  children: PropTypes.node,
}

BrandBackground.defaultProps = {
  brand: 'default',
  bold: false,
}

export default BrandBackground
