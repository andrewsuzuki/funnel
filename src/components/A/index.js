/**
 * A link to a certain page, an anchor tag
 */

import PropTypes from 'prop-types'
import merge from 'lodash.merge'

import {
  styled,
  connectBackgroundContext,
  propTypeBackgroundContext,
} from '../../utils'

import { hover } from '../../mixins'


export const stylesBase = (t) => ({
  cursor: 'pointer',
  color: t.linkColor,
  textDecoration: t.linkDecoration,
})

export const stylesHover = (t) => ({
  color: t.linkHoverColor,
  textDecoration: t.linkHoverDecoration,
})


const A = connectBackgroundContext(styled.a(({ backgroundContext, inheritColor }, t) =>
  merge(
    {
      ...stylesBase(t),
      ...hover(stylesHover(t)),
    },
    backgroundContext && backgroundContext.linkColor && {
      color: backgroundContext.linkColor,
      ...hover({ color: backgroundContext.linkColor }),
    },
    inheritColor && {
      color: 'inherit',
      ...hover({ color: 'inherit' }),
    },
  ),
))

A.propTypes = {
  backgroundContext: propTypeBackgroundContext,
  inheritColor: PropTypes.bool, // inherit css color from parent
}

export default A
