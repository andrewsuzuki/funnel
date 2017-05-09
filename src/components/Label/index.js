import PropTypes from 'prop-types'

import canConnectField from '../Field/canConnectField'

import { styled, propTypeSize, propTypeColumnBreakpoint } from '../../utils'

import { breakpoint } from '../../mixins'


const sizeToThemeFontSizeMap = {
  normal: 'inputFontSizeNormal',
  small: 'inputFontSizeSmall',
  large: 'inputFontSizeLarge',
}


const Label = styled.label(({ size, horizontal, disabled }, t) => ({
  display: 'inline-block',
  marginBottom: t.labelMarginBottom,
  fontWeight: t.fontWeightBold,

  // Size
  fontSize: t[sizeToThemeFontSizeMap[size]],

  // Horizontal
  // Add padding-top sized to match input font size
  ...horizontal && breakpoint(horizontal === true ? 'tablet' : horizontal, { paddingTop: t.inputPaddingY }),

  // Disabled
  ...disabled && { color: t.grayLight },
}))

Label.propTypes = {
  size: propTypeSize.isRequired, // has default

  horizontal: propTypeColumnBreakpoint,
  disabled: PropTypes.bool,
}

Label.defaultProps = {
  size: 'normal',
}


// Since there is only one Label per Field, we can safely
// set alwaysId=true (always attach htmlFor if descendent of Field)
export default canConnectField(Label, 'htmlFor', true)
