/**
 * Tile
 */


import PropTypes from 'prop-types'

import {
  styled,
  propTypeBrandOrDefaultOrLightOrDark,
} from '../../utils'

import { borderRadiusIfEnabled, boxShadowIfEnabled, padding } from '../../mixins'

import BrandBackground from '../BrandBackground'


const Tile = styled(BrandBackground)(({ hasRadius, hasShadow }, t) => ({
  marginBottom: t.tileMarginBottom,
  ...padding(t.tilePaddingY, t.tilePaddingX),
  ...borderRadiusIfEnabled(t, t.tileBorderRadius),
  ...boxShadowIfEnabled(t, t.tileBoxShadow),
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
