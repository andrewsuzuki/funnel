/**
 * A link to a certain page, an anchor tag
 */

import { compose } from 'glamor'

import { styled, connectBackgroundContext } from '../../utils'

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


export default connectBackgroundContext(styled.a(({ backgroundContext }, t) =>
  compose(
    {
      ...stylesBase(t),
      ...hover(stylesHover(t)),
    },
    backgroundContext && {
      color: backgroundContext.textColor,
      ...hover({ color: backgroundContext.textColor }),
    },
  ),
))
