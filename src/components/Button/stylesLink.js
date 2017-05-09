import { boxShadowIfEnabled, hover, focus, active, disabled } from '../../mixins'


export default function stylesLink(t, props) {
  const borderAndBg = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  }

  const baseStyles = {
    ...borderAndBg,
    color: t.linkColor,
    textDecoration: t.linkDecoration,
    ...boxShadowIfEnabled('none'),
  }

  const hoverStyles = {
    ...borderAndBg,
    color: t.linkHoverColor,
    textDecoration: t.linkHoverDecoration,
  }

  const activeStyles = {
    ...borderAndBg,
    ...boxShadowIfEnabled('none'),
  }

  const focusStyles = {
    ...hoverStyles,
    outline: 0,
  }

  const disabledStyles = {
    cursor: t.cursorDisabled,
    opacity: 0.65,
    color: t.buttonLinkDisabledColor,
    textDecoration: t.linkDecoration,
    ...boxShadowIfEnabled('none'),
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
