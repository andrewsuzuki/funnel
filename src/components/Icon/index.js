/**
 * Icon
 *
 * This is an attempt to duplicate the font-awesome sass stylesheets
 * in css-in-js form, to escape having to include a css/sass loader.
 * The font-awesome font still needs to be included and available as
 * theme.iconFontFamily (probably 'FontAwesome')
 */

import PropTypes from 'prop-types'
import memoize from 'lodash.memoize'

import { styled, propTypeIconSize } from '../../utils'

import { before } from '../../mixins'

import canConnectField from '../Field/canConnectField'

import nameCharMap from './nameCharMap'


const iconSizeToFontSize = memoize((size, relative) => {
  const num = (!size || size === 'normal') ? 1 : size
  return `${num}${relative ? 'em' : 'rem'}`
})


// Memoize the char lookup, just since the entire map is huge
// NOTE This might not actually help at all
const iconNameToChar = memoize((name) => (nameCharMap[name] || ' '))


const Icon = styled.span((props, t) => {
  const {
    name,
    size,
    relative,
    fixedWidth,
    rotate,
    flipHorizontal,
    flipVertical,
    disabled,
  } = props

  const fontSize = iconSizeToFontSize(size, relative)

  return {
    // The character
    ...before({ content: `"${iconNameToChar(name)}"` }),

    // Due to android bug, need 'text-rendering: "auto"' on fa font icons. see:
    // https://github.com/FortAwesome/Font-Awesome/issues/1094
    textRendering: 'auto',

    // Display
    display: 'inline-block',

    // Font
    fontFamily: t.iconFontFamily,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontSize,

    // Fixed Width (width of largest icons, e.g. cc-discover)
    ...fixedWidth && { width: '1.29em', textAlign: 'center' }, // 18em/14 = 1.29em

    // Rotate
    ...rotate && { transform: `rotate(${rotate}deg)` },

    // Flip
    ...flipHorizontal && { transform: 'scale(-1, 1)' },
    ...flipVertical && { transform: 'scale(1, -1)' },

    // Disabled
    ...disabled && { opacity: 0.65 },
  }
})


Icon.propTypes = {
  name: PropTypes.string.isRequired,

  size: propTypeIconSize.isRequired, // has default

  relative: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  flipHorizontal: PropTypes.bool,
  flipVertical: PropTypes.bool,
  rotate: PropTypes.number,
}

Icon.defaultProps = {
  size: 'normal',
}


export default canConnectField(
  Icon,
  undefined,
  undefined,
  ['disabled'],
)
