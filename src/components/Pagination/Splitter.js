import { styled, propTypeBreakpoint } from '../../utils'

import { breakpoint } from '../../mixins'


const Splitter = styled.div(({ breakAt }, t) => ({
  width: '100%',

  ...breakpoint(t, breakAt, {
    display: 'none',
  }),
}))

Splitter.propTypes = {
  breakAt: propTypeBreakpoint.isRequired,
}

export default Splitter
