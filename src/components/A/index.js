/**
 * A link to a certain page, an anchor tag
 */

import { styled } from '../../utils'

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


export default styled.a((p, t) => ({
  ...stylesBase(t),
  ...hover(stylesHover(t)),
}))
