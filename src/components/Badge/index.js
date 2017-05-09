import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'

import {
  styled,
  propTypeBrandOrDefaultOrLightOrDark,
  propTypeSize,
} from '../../utils'

import { empty, borderRadiusIfEnabled } from '../../mixins'

import BrandBackground from '../BrandBackground'

import Close from '../Close'


const BaseElement = styled(BrandBackground)((p, t) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: t.badgeHeight,
  paddingLeft: t.badgePaddingX,
  paddingRight: t.badgePaddingX,
  lineHeight: t.badgeLineHeight,
  wordWrap: 'nowrap',
  fontFamily: t.badgeFontFamily,
  fontWeight: t.badgeFontWeight,
  ...borderRadiusIfEnabled(t, t.badgeBorderRadius),

  ...empty({
    display: 'none',
  }),
}))

const sizeMap = {
  // size: [Theme font size, Close size]
  small: ['badgefontSizeSmall', 'small'],
  normal: ['badgeFontSizeNormal', 'small'],
  large: ['badgeFontSizeLarge', 'normal'],
}

const SizedElement = styled(BaseElement)(({ size }) => ({
  fontSize: get(sizeMap, [size, 0], 0),
}))


const BadgeClose = styled(Close)({
  marginLeft: '0.25em',
  marginRight: '-0.375em',
})


export default function Badge({ brand, size, onClose, children }) {
  const childrenArray = React.Children.toArray(children)

  const closeMaybe = !onClose
    ? null
    : (
      <BadgeClose
        key="close"
        size={get(sizeMap, [size, 1], 'small')}
        onClick={onClose}
      />
    )

  return React.createElement(
    SizedElement,
    { brand, size, bold: false },
    [...childrenArray, closeMaybe],
  )
}

Badge.propTypes = {
  brand: propTypeBrandOrDefaultOrLightOrDark.isRequired,
  size: propTypeSize.isRequired,
  onClose: PropTypes.func,

  children: PropTypes.node.isRequired,
}

Badge.defaultProps = {
  brand: 'light',
  size: 'small',
}
