/**
 * A link to a certain page, an anchor tag
 */

import { styled, expandStyles } from '../../utils'


export default styled.a(expandStyles(
  'c/~brandPrimary',
  'pointer',
  { ':hover': expandStyles('c/~brandPrimary~dark') },
))
