import { capitalize, darken } from '../../utils'

import { boxShadowIfEnabled, hover, focus, active, disabled, borderColor } from '../../mixins'


export default function stylesBrandNormal(t, brand, props) {
  const brandCap = capitalize(brand)

  const buttonThemeValue = (f) => t[`button${brandCap}${f}`]

  const baseStyles = {
    color: buttonThemeValue('Color'),
    backgroundColor: buttonThemeValue('Bg'),
    ...borderColor(buttonThemeValue('Border')),
  }

  const hoverStyles = {
    textDecoration: 'none',
    backgroundColor: darken(buttonThemeValue('Bg'), 10),
    ...borderColor(darken(buttonThemeValue('Border'), 12)),
  }

  const focusStyles = {
    outline: 0,
    textDecoration: 'none',
    ...boxShadowIfEnabled(t, t.buttonFocusBoxShadow),
  }

  const activeStyles = {
    outline: 0,
    textDecoration: 'none',
    backgroundColor: darken(buttonThemeValue('Bg'), 10),
    ...borderColor(darken(buttonThemeValue('Border'), 12)),
    ...boxShadowIfEnabled(t, t.buttonActiveBoxShadow),
  }

  const disabledStyles = {
    cursor: t.cursorDisabled,
    opacity: t.disabledOpacity,

    color: buttonThemeValue('Color'),
    backgroundColor: buttonThemeValue('Bg'),
    ...boxShadowIfEnabled(t, 'none'),
  }

  return {
    ...baseStyles,

    ...props.focus && focusStyles,
    ...props.active && activeStyles,
    ...props.disabled && disabledStyles,

    ...hover(hoverStyles),
    ...focus(focusStyles),
    ...active(activeStyles),
    ...disabled(disabledStyles),
  }
}
