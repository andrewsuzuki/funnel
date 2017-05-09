/**
 * A link to a certain page, an anchor tag
 */

import { styled, darken } from '../../utils'

import * as mixins from '../../mixins'


export default styled.a((p, t) => ({
  cursor: 'pointer',
  color: t.brandPrimary,

  ...mixins.hover({
    color: darken(t.brandPrimary, 10),
  }),
}))
