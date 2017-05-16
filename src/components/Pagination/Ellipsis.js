import { styled } from '../../utils'

import { before, borderColor } from '../../mixins'

import { makeBaseItemStyles } from './LinkItem'


const Ellipsis = styled.span((p, t) => ({
  ...makeBaseItemStyles({}, t),

  ...borderColor('transparent'),

  opacity: 0.65,

  ...before({
    content: '"\\2026"', // &hellip
  }),
}))

export default Ellipsis
