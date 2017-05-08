/**
 * Tile
 */


import PropTypes from 'prop-types'

import {
  styled,
  expandStyles,
  propTypeBrandOrDefaultOrLightOrDark,
} from '../../utils'

import BrandBackground from '../BrandBackground'


const Tile = styled(BrandBackground, ({ hasRadius, hasShadow }) => expandStyles(
  'p/~tilePaddingY/~tilePaddingX',
  'mBottom/~tileMarginBottom',

  hasRadius && '!radius/~tileBorderRadius',

  hasShadow && '!bShadow/~tileBoxShadow',
))


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
