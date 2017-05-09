import { styled } from '../../utils'

import { firstChild } from '../../mixins'


export default styled.li({
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: '3em',
  alignItems: 'center',

  borderTop: '1px solid #eee',

  ...firstChild({
    borderTop: 0,
  }),
})
