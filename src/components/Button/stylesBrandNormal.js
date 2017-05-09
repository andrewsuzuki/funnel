import { capitalize, darken } from '../../utils'

import { boxShadowIfEnabled } from '../../mixins'


export default function stylesBrandNormal(t, brand, { focus, active, disabled }) {
  const brandCap = capitalize(brand)

  const lubba = (f) => t[`button${brandCap}${f}`]

  const baseStyles = {
    color: lubba('Color'),
    backgroundColor: lubba('Bg'),
    borderColor: lubba('Border'),
  }

  const hoverStyles = {
    textDecoration: 'none',
    backgroundColor: darken(lubba('Bg'), 10),
    borderColor: darken(lubba('Border'), 12),
  }

  const focusStyles = {
    outline: 0,
    textDecoration: 'none',
    ...boxShadowIfEnabled(t.buttonFocusBoxShadow),
  }

  const activeStyles = {
    outline: 0,
    textDecoration: 'none',
    backgroundColor: darken(lubba('Bg'), 10),
    borderColor: darken(lubba('Border'), 12),
    ...boxShadowIfEnabled(t.buttonActiveBoxShadow),
  }

  const disabledStyles = {
    cursor: t.cursorDisabled,
    opacity: 0.65,

    color: lubba('Color'),
    backgroundColor: lubba('Bg'),
    ...boxShadowIfEnabled('none'),
  }

  return {
    ...baseStyles,

    ...focus && focusStyles,
    ...active && activeStyles,
    ...disabled && disabledStyles,

    ':hover': hoverStyles,
    ':focus': focusStyles,
    ':active': activeStyles,
    ':disabled': disabledStyles,
  }
}