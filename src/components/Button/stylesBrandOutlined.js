import { capitalize } from '../../utils'

import { boxShadowIfEnabled, hover, focus, active, disabled, borderColor } from '../../mixins'


export default function stylesBrandOutlined(t, brand, props) {
  const brandCap = capitalize(brand)

  const buttonThemeValue = (f) => t[`button${brandCap}${f}`]

  const baseStyles = {
    color: buttonThemeValue('Bg'),
    backgroundColor: 'transparent',
    ...borderColor(buttonThemeValue('Bg')),
  }

  const hoverStyles = {
    textDecoration: 'none',
    color: buttonThemeValue('Color'),
    backgroundColor: buttonThemeValue('Bg'),
    ...borderColor(buttonThemeValue('Bg')),
  }

  const focusStyles = {
    outline: 0,
    textDecoration: 'none',
    ...boxShadowIfEnabled(t, buttonThemeValue('FocusBoxShadow')),
  }

  const activeStyles = {
    outline: 0,
    textDecoration: 'none',
    color: buttonThemeValue('Color'),
    backgroundColor: buttonThemeValue('Bg'),
    ...borderColor(buttonThemeValue('Bg')),
  }

  const disabledStyles = {
    cursor: t.cursorDisabled,
    opacity: 0.65,

    color: buttonThemeValue('Bg'),
    backgroundColor: 'transparent',
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
