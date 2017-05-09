import { capitalize } from '../../utils'

import { boxShadowIfEnabled, hover, focus, active, disabled } from '../../mixins'


export default function stylesBrandOutlined(t, brand, props) {
  const brandCap = capitalize(brand)

  const lubba = (f) => t[`button${brandCap}${f}`]

  const baseStyles = {
    color: lubba('Bg'),
    backgroundColor: 'transparent',
    borderColor: lubba('Bg'),
  }

  const hoverStyles = {
    textDecoration: 'none',
    color: lubba('Color'),
    backgroundColor: lubba('Bg'),
    borderColor: lubba('Bg'),
  }

  const focusStyles = {
    outline: 0,
    textDecoration: 'none',
    ...boxShadowIfEnabled(t, lubba('FocusBoxShadow')),
  }

  const activeStyles = {
    outline: 0,
    textDecoration: 'none',
    color: lubba('Color'),
    backgroundColor: lubba('Bg'),
    borderColor: lubba('Bg'),
  }

  const disabledStyles = {
    cursor: t.cursorDisabled,
    opacity: 0.65,

    color: lubba('Bg'),
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
