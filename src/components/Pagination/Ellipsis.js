import { styled } from '../../utils'

import { before, padding, margin, borderColor } from '../../mixins'

import { makeBaseItemStyles } from './LinkItem'


const Ellipsis = styled.span((p, t) => ({
  ...makeBaseItemStyles({}, t),

  width: 'auto',
  ...padding(null, '0.5em'),
  ...margin('0.25rem'),
  fontSize: '1em',
  textAlign: 'center',

  flexGrow: 0,
  flexShrink: 0,

  ...borderColor('transparent'),

  ...before({
    content: '"\\2026"', // &hellip
  }),
}))

export default Ellipsis
