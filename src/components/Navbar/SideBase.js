import { styled } from '../../utils'

import { breakpoint } from '../../mixins'


const SideBase = styled.div((p, t) => ({
  flexGrow: 1,
  flexShrink: 0,

  display: 'flex',
  alignItems: 'stretch',

  maxWidth: '100%',
  overflow: 'auto',

  ...breakpoint(t, 'widescreen', {
    flexBasis: 0,
  }),
}))

SideBase.propTypes = {
}

export default SideBase
