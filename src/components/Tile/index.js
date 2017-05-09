/**
 * Tile
 */


import PropTypes from 'prop-types'

import {
  styled,
  propTypeBrandOrDefaultOrLightOrDark,
} from '../../utils'

import {
  borderRadiusIfEnabled,
  boxShadowIfEnabled,
} from '../../mixins'

import BrandBackground from '../BrandBackground'


const Tile = styled(BrandBackground)(({ hasRadius, hasShadow }, t) => ({
  paddingTop: t.tilePaddingY,
  paddingRight: t.tilePaddingX,
  paddingBottom: t.tilePaddingY,
  paddingLeft: t.tilePaddingX,
  marginBottom: t.tileMarginBottom,
  ...borderRadiusIfEnabled(t.tileBorderRadius),
  ...boxShadowIfEnabled(t.tileBoxShadow),
}))


Tile.propTypes = {
  brand: propTypeBrandOrDefaultOrLightOrDark.isRequired, // has default

  hasRadius: PropTypes.bool,
  hasShadow: PropTypes.bool,
  bold: PropTypes.bool,

  children: PropTypes.node,
}

Tile.defaultProps = {
  brand: 'default',
}

export default Tile
