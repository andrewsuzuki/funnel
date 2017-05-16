/**
 * Field-specific mixins
 */

import merge from 'lodash.merge'

import { capitalize } from '../utils'

import {
  borderRadiusIfEnabled,
  transitionIfEnabled,
  boxShadowIfEnabled,
  disabled,
  focus,
  placeholder,
  padding,
  borderWidth,
  borderStyle,
  borderColor,
} from '../mixins' // i.e. './index'


export const makeBaseInputStyles = (t) => ({
  display: 'block',
  width: '100%',

  // prevent Select (or anything else really) from overflowing if options are long
  maxWidth: '100%',

  height: t.inputHeight,

  lineHeight: t.inputLineHeight,

  ...transitionIfEnabled(t, t.inputTransition),

  // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
  backgroundImage: 'none',
  backgroundClip: 'padding-box',

  ...placeholder({
    color: t.inputColorPlaceholder,
    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526
    opacity: 1,
  }),

  ...borderWidth(t.inputBorderWidth),
  ...borderStyle('solid'),

  // Possibly overridden:

  ...padding(t.inputPaddingY, t.inputPaddingX), // overridden (x only) by hasIcon_

  ...borderColor(t.inputBorderColor), // overridden by brand

  fontSize: t.inputFontSizeNormal, // overridden by size

  color: t.inputColor, // overridden by focus

  backgroundColor: t.inputBackgroundColor, // overridden by focus and disabled

  ...borderRadiusIfEnabled(t, t.inputBorderRadiusNormal), // overridden by size
  // NOTE If border radius is not applied, iOS will default to a
  // native border radius. Make sure things are boxy.
  ...!t.enableRounded && { borderRadius: 0 },

  ...boxShadowIfEnabled(t, t.inputBoxShadow), // overridden by focus
})


export const makeDisabledStyles = (t) => ({
  cursor: t.cursorDisabled,
  backgroundColor: t.inputBackgroundColorDisabled,

  // iOS fix for unreadable disabled content;
  // see https://github.com/twbs/bootstrap/issues/11655
  opacity: 1,
})


export const makeFocusStyles = (t) => ({
  outline: 0,
  color: t.inputColorFocus,
  backgroundColor: t.inputBackgroundColorFocus,
  ...borderColor(t.inputBorderColorFocus), // overridden by brand-focus
  ...boxShadowIfEnabled(t, t.inputBoxShadowFocus),
})


// props (all optional): disabled, focus, hover, brand, size, hasIconLeft, hasIconRight
export const makeInputStyles = (props, t) => {
  const disabledStyles = makeDisabledStyles(t)
  const focusStyles = makeFocusStyles(t)

  return merge(
    makeBaseInputStyles(t),
    {
      // Disabled and Focus
      ...props.disabled && disabledStyles,
      ...props.focus && focusStyles,

      ...disabled(disabledStyles),
      ...focus(focusStyles),
    },
    {
      // Brand
      ...props.brand && {
        ...borderColor(t[`brand${capitalize(props.brand)}`]),
        ...focus({ ...borderColor(t[`brand${capitalize(props.brand)}`]) }),
      },

      // Size
      ...props.size && {
        fontSize: t[`inputFontSize${capitalize(props.size)}`],
        ...borderRadiusIfEnabled(t, t[`inputBorderRadius${capitalize(props.size)}`]),
      },
    },
    {
      // Icon padding
      ...props.hasIconLeft && { paddingLeft: t.inputPaddingXHasIcon },
      ...props.hasIconRight && { paddingRight: t.inputPaddingXHasIcon },
    },
  )
}
