import { capitalize } from '../../utils'

import { boxShadowIfEnabled, hover, focus, active, disabled, borderColor } from '../../mixins'


export default function stylesBrandOutlined(t, brand, props) {
  const brandCap = capitalize(brand)

  const buttonThemeValue = (f) => t[`button${brandCap}${f}`]

  const baseStyles = {
    color: buttonThemeValue('BackgroundColor'),
    backgroundColor: 'transparent',
    ...borderColor(buttonThemeValue('BackgroundColor')),
  }

  const hoverStyles = {
    textDecoration: 'none',
    color: buttonThemeValue('Color'),
    backgroundColor: buttonThemeValue('BackgroundColor'),
    ...borderColor(buttonThemeValue('BackgroundColor')),
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
    backgroundColor: buttonThemeValue('BackgroundColor'),
    ...borderColor(buttonThemeValue('BackgroundColor')),
  }

  const disabledStyles = {
    cursor: t.cursorDisabled,
    opacity: t.disabledOpacity,

    color: buttonThemeValue('BackgroundColor'),
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
