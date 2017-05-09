/**
 * BrandBackground
 */


import PropTypes from 'prop-types'
import color from 'color'

import {
  styled,
  propTypeBrandOrDefaultOrLightOrDark,
} from '../../utils'


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
  default: ['white', 'textColor'],
  light: ['grayLightest', 'textColor'],
  dark: ['grayDark', 'white'],
  primary: ['brandPrimary', 'white'],
  success: ['brandSuccess', 'white'],
  info: ['brandInfo', 'white'],
  warning: ['brandWarning', 'white'],
  danger: ['brandDanger', 'white'],
}


const boldBrandMap = {
  ...normalBrandMap,
  dark: ['gray', 'white'], // tweak 'dark' background color (lighter)
}


const BrandBackground = styled.div(({ bold, brand, children }, t) => {
  const [themeBackgroundColor, themeColor] = bold
    ? boldBrandMap[brand]
    : normalBrandMap[brand]

  return {
    color: t[themeColor],
    ...(bold
      ? { backgroundImage: boldGradientStyle(t[themeBackgroundColor]) }
      : { backgroundColor: themeBackgroundColor }),
  }
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
