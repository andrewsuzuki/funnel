import PropTypes from 'prop-types'

import { styled, propTypeHorizontalPosition, propTypeBreakpoint } from '../../utils'

import { breakpoint } from '../../mixins'


const pageNumbersPositionToJustifyContentMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
}


const PageNumbersWrapper = styled.div(({ position, order, breakAt }, t) => ({
  flexGrow: 1,
  flexShrink: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // overriden above tablet
  flexWrap: 'wrap',

  ...breakpoint(t, breakAt, {
    order,
    justifyContent: pageNumbersPositionToJustifyContentMap[position],
  }),
}))

PageNumbersWrapper.propTypes = {
  position: propTypeHorizontalPosition.isRequired,
  order: PropTypes.number.isRequired,
  breakAt: propTypeBreakpoint.isRequired,
}

export default PageNumbersWrapper
