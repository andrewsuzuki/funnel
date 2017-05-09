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
} from './'
// NOTE ^ is this possible? circular dep?


const makeBaseInputStyles = (t) => ({
  display: 'block',
  width: '100%',
  maxWidth: '100%', // prevent Select from overflowing if options are long

  height: t.inputHeight,

  paddingTop: t.inputPaddingY,
  paddingRight: t.inputPaddingX,
  paddingBottom: t.inputPaddingY,
  paddingLeft: t.inputPaddingX,

  fontSize: t.inputFontSizeNormal, // overridden by size

  lineHeight: t.inputLineHeight,

  color: t.inputColor,

  backgroundColor: t.inputBackgroundColor,

  // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
  backgroundImage: 'none',
  backgroundClip: 'padding-box',

  borderStyle: 'solid',
  borderWidth: t.inputBorderWidth,
  borderColor: t.inputBorderColor,

  // NOTE if not applied, iOS defaults to border radius
  ...borderRadiusIfEnabled(t.inputBorderRadiusNormal), // overridden by size

  ...transitionIfEnabled(t.inputTransition),

  ...boxShadowIfEnabled(t.inputBoxShadow),

  // Unstyle the caret on `<select>`s
  appearance: 'none',

  // TODO ms fix: waiting for styletron to enable :: pseudo selectors
  // &::-ms-expand {
  //   background-color: transparent;
  //   border: 0;
  // }

  // TODO placeholder: waiting for styletron to enable :: pseudo selectors
  // &::placeholder {
  //   color: $input-color-placeholder;
  //   // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
  //   opacity: 1;
  // }
})


export function makeInputStyles(props, t) {
  const disabledStyles = {
    cursor: 'not-allowed',
    backgroundColor: t.inputBackgroundColorDisabled,

    // iOS fix for unreadable disabled content;
    // see https://github.com/twbs/bootstrap/issues/11655
    opacity: 1,
  }

  // Customize the focus state to imitate native WebKit styles
  const focusStyles = {
    outline: 0,
    color: t.inputColorFocus,
    backgroundColor: t.inputBackgroundColorFocus,
    borderColor: t.inputBorderColorFocus,
    ...boxShadowIfEnabled(t.inputBoxShadowFocus),
  }

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
        borderColor: t[`brand${capitalize(props.brand)}`],
        ...focus({ borderColor: t[`brand${capitalize(props.brand)}`] }),
      },

      // Size
      ...props.size && {
        fontSize: t[`inputFontSize${capitalize(props.size)}`],
        ...borderRadiusIfEnabled(t[`inputBorderRadius${capitalize(props.size)}`]),
      },
    },
    {
      // Icon padding
      ...props.hasIconLeft && { paddingLeft: t.inputPaddingXHasIcon },
      ...props.hasIconRight && { paddingRight: t.inputPaddingXHasIcon },
    },
  )
}
