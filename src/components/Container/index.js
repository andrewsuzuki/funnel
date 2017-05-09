import React from 'react'
import PropTypes from 'prop-types'
import partial from 'lodash.partial'

import { styled, halvePixels, breakpointsMapAndMerge } from '../../utils'

import { breakpointOnly } from '../../mixins'


const makeGutterStylesForBreakpoint = (t, breakpoint) =>
  breakpointOnly(t, breakpoint, {
    paddingLeft: halvePixels(t.gridGutters[breakpoint]),
    paddingRight: halvePixels(t.gridGutters[breakpoint]),
  })


const makeMaxWidthStylesForBreakpoint = (t, breakpoint) =>
  breakpointOnly(t, breakpoint, {
    width: t.gridContainerMaxWidths[breakpoint],
    maxWidth: '100%',
  })


const StyledDivFluid = styled.div((p, t) => ({
  width: '100%', // overridden by StyledDivStandard
  marginLeft: 'auto',
  marginRight: 'auto',

  // Gutters for each breakpoint
  ...breakpointsMapAndMerge(partial(makeGutterStylesForBreakpoint, t)),
}))


const StyledDivStandard = styled(StyledDivFluid)((p, t) => ({
  width: 'auto',

  // Max widths for each breakpoint (except smallest)
  ...breakpointsMapAndMerge(partial(makeMaxWidthStylesForBreakpoint, t), true),
}))


export default function Container({ fluid, children, ...restProps }) {
  return React.createElement(fluid ? StyledDivFluid : StyledDivStandard, restProps, children)
}

Container.propTypes = {
  fluid: PropTypes.bool,

  children: PropTypes.node,
}
