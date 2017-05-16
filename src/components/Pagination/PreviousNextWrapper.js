import PropTypes from 'prop-types'

import { styled, propTypeBreakpoint } from '../../utils'

import { breakpoint } from '../../mixins'


const PreviousNextWrapper = styled.div(({ order, breakAt }, t) => ({
  flexGrow: 1,
  flexShrink: 1,

  ...breakpoint(t, breakAt, {
    flexGrow: 0,
    flexShrink: 0,
    order,
  }),
}))

PreviousNextWrapper.propTypes = {
  order: PropTypes.number.isRequired,
  breakAt: propTypeBreakpoint.isRequired,
}

export default PreviousNextWrapper
