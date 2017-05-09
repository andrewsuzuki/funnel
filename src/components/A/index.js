/**
 * A link to a certain page, an anchor tag
 */

import { styled } from '../../utils'

import { hover } from '../../mixins'


export default styled.a((p, t) => ({
  cursor: 'pointer',
  color: t.linkColor,
  textDecoration: t.linkDecoration,

  ...hover({
    color: t.linkHoverColor,
    textDecoration: t.linkHoverDecoration,
  }),
}))
