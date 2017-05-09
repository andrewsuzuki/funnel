import React from 'react'
import PropTypes from 'prop-types'

import BrandBackground from '../BrandBackground'

import Close from '../Close'

import { styled, propTypeBrandOrDefaultOrLightOrDark } from '../../utils'

import { borderRadiusIfEnabled } from '../../mixins'


const DismissableClose = styled(Close)({
  position: 'absolute',
  top: '0.5em',
  right: '0.5em',
})


const BaseDiv = styled(BrandBackground)(({ hasClose }, t) => ({
  position: 'relative',
  paddingTop: t.alertPaddingY,
  paddingRight: t[hasClose ? 'alertPaddingXClose' : 'alertPaddingX'],
  paddingBottom: t.alertPaddingY,
  paddingLeft: t.alertPaddingX,
  marginBottom: t.alertMarginBottom,
  lineHeight: t.alertLineHeight,
  ...borderRadiusIfEnabled(t, t.alertBorderRadius),
}))

BaseDiv.propTypes = {
  hasClose: PropTypes.bool,
  // ...other BrandBackground props
}


export default function Alert({ brand, bold, onClose, children }) {
  if (!children) {
    return null
  }

  return (
    <BaseDiv brand={brand} bold={bold} hasClose={Boolean(onClose)}>
      {children}
      {onClose && <DismissableClose onClick={onClose} size="normal" />}
    </BaseDiv>
  )
}

Alert.propTypes = {
  brand: propTypeBrandOrDefaultOrLightOrDark.isRequired, // has default
  bold: PropTypes.bool,
  onClose: PropTypes.func,

  children: PropTypes.node,
}

Alert.defaultProps = {
  brand: 'light',
}
