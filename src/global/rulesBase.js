import { smoothFonts } from '../mixins'

import { stylesBase as stylesLinkBase, stylesHover as stylesLinkHover } from '../components/A'


/* eslint-disable quote-props */
export default (t) => ({
  'html, body': {
    height: '100%',
    width: '100%',
  },

  'body': {
    // Color
    backgroundColor: t.baseBackgroundColor,
    color: t.baseTextColor,

    // Font and text
    fontFamily: t.baseFontFamily,
    fontSize: t.baseFontSize,
    fontWeight: t.baseFontWeight,
    lineHeight: t.baseLineHeight,

    // Font smoothing
    ...smoothFonts(),
  },

  'b, strong': {
    fontWeight: t.fontWeightBold,
  },

  'ul, ol': {
    listStylePosition: 'inside',
  },

  'input, button, select, optgroup, textarea': {
    fontFamily: 'inherit',
  },

  'a': stylesLinkBase(t),
  'a:hover': stylesLinkHover(t),
})
/* eslint-enable quote-props */
