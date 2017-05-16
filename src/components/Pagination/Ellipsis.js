import { styled } from '../../utils'

import { before, hover, borderColor } from '../../mixins'

import { makeBaseItemStyles } from './LinkItem'


const Ellipsis = styled.span((p, t) => ({
  ...makeBaseItemStyles({}, t),

  backgroundColor: 'transparent',
  ...borderColor('transparent'),

  ...hover({
    backgroundColor: 'transparent',
    ...borderColor('transparent'),
  }),

  opacity: t.disabledOpacity,

  ...before({
    content: '"\\2026"', // &hellip
  }),
}))

export default Ellipsis
