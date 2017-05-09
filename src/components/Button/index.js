import React from 'react'
import PropTypes from 'prop-types'
import partial from 'lodash.partial'

import { styled, propTypeSize, propTypeBrandOrDefault, negate } from '../../utils'

import { transitionIfEnabled } from '../../mixins'

import canConnectField from '../Field/canConnectField'

import stylesSize from './stylesSize'
import stylesBrandNormal from './stylesBrandNormal'
import stylesBrandOutlined from './stylesBrandOutlined'
import stylesLink from './stylesLink'


const StyledButton = styled.button((props, t) => {
  const { size, brand, link, outlined, focus, active, disabled } = props

  const branding = (() => {
    if (link) {
      return partial(stylesLink, t)
    }

    return partial(outlined ? stylesBrandOutlined : stylesBrandNormal, t, brand)
  })()({ focus, active, disabled })

  const sizing = stylesSize(t, size)

  return {
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: t.buttonFontWeight,
    textAlign: 'center',
    wordWrap: 'nowrap',
    verticalAlign: 'middle',
    borderWidth: t.buttonBorderWidth,
    borderStyle: 'solid',
    borderColor: 'transparent',

    paddingTop: t.buttonPaddingY,
    paddingRight: t.buttonPaddingX,
    paddingBottom: t.buttonPaddingY,
    paddingLeft: t.buttonPaddingX,

    userSelect: 'none',

    ...transitionIfEnabled(t.buttonTransition),

    ...sizing,
    ...branding,
  }
})


const ButtonInGroup = styled(StyledButton)(({ isFirstInGroup, isLastInGroup }, t) => ({
  position: 'relative',
  flexBasis: 'auto',
  flexGrow: 0,
  flexShrink: 1,
  marginBottom: 0,

  // Prevent double borders and radius when buttons are next to each other
  ...!isFirstInGroup && { marginLeft: negate(t.buttonBorderWidth) },
  ...!isFirstInGroup && !isLastInGroup && { borderRadius: 0 },
  ...isFirstInGroup && { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
  ...isLastInGroup && { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
}))


function Button({ isInButtonGroup, ...restProps }) {
  const component = isInButtonGroup ? ButtonInGroup : StyledButton
  return React.createElement(component, restProps)
}

Button.propTypes = {
  size: propTypeSize.isRequired, // has default
  brand: propTypeBrandOrDefault.isRequired, // has default

  link: PropTypes.bool,
  outlined: PropTypes.bool,

  focus: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,

  isInButtonGroup: PropTypes.bool,
  isFirstInGroup: PropTypes.bool,
  isLastInGroup: PropTypes.bool,
}


Button.defaultProps = {
  size: 'normal',
  brand: 'default',
}


export default canConnectField(Button)
