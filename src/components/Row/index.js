import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash.omit'
import partial from 'lodash.partial'
import invariant from 'invariant'

import {
  styled,
  halvePixels,
  negate,
  breakpointsMapAndMerge,
  validBreakpoints,
  validJustifyContent,
  validAlignItems,
  validAlignContent,
  propTypesForRowBreakpoints,
  propTypesForColumnsPassBreakpoints,
  breakpointNameToColumnsPassBreakpointName,
  breakpointsCreateSpecStringParser,
  breakpointsCreateBreakpointsForPropSpecStrings,
  breakpointsCreateSpecsOnValues,
} from '../../utils'

import {
  breakpointOnly,
  justifyContent,
  alignItems,
  alignContent,
  flexDirection,
} from '../../mixins'

import Column from '../Column'


const makeGutterStylesForBreakpoint = (t, breakpoint) =>
  breakpointOnly(t, breakpoint, {
    marginLeft: negate(halvePixels(t.gridGutters[breakpoint])),
    marginRight: negate(halvePixels(t.gridGutters[breakpoint])),
  })


const columnPassBreakpoints = validBreakpoints.map((bkpt) =>
  breakpointNameToColumnsPassBreakpointName(bkpt))


const specDict = {
  // justify-content
  ...breakpointsCreateSpecsOnValues(
    validJustifyContent,
    'justify-content:',
    justifyContent,
  ),

  // align-items
  ...breakpointsCreateSpecsOnValues(
    validAlignItems,
    'align-items:',
    alignItems,
  ),

  // align-content
  ...breakpointsCreateSpecsOnValues(
    validAlignContent,
    'align-content:',
    alignContent,
  ),

  // direction (flex-direction) (with normal=>row, reverse=>row-reverse)
  ...breakpointsCreateSpecsOnValues(
    [['normal', 'row'], ['reverse', 'row-reverse']],
    'direction:',
    flexDirection,
  ),
}


const propGuardFn = (prop) => prop // pass


const specResolver = (theme, spec) => (specDict[spec] || spec)
const specStringParser = breakpointsCreateSpecStringParser(specResolver)


const parsedGuardFn = (parsed) => parsed // pass


const StyledDivGapless = styled.div((props, theme) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: 0,
  marginRight: 0,

  ...breakpointsCreateBreakpointsForPropSpecStrings(
    theme,
    props,
    propGuardFn, // pass
    specStringParser, // our row breakpoint spec string parser
    parsedGuardFn, // pass
  ),
}))


const StyledDivGaps = styled(StyledDivGapless)((p, t) =>
  breakpointsMapAndMerge(partial(makeGutterStylesForBreakpoint, t)))


export default function Row({ gapless, children, ...restProps }) {
  const component = gapless ? StyledDivGapless : StyledDivGaps

  React.Children.forEach(children, (child) => {
    // Verify child is a Column
    invariant(
      child.type === Column,
      'All direct children of Row must be a Column',
    )
  })

  const columnPassBreakpointProps = breakpointsMapAndMerge((bkpt) => {
    const result = restProps[breakpointNameToColumnsPassBreakpointName(bkpt)]
    return result ? { [bkpt]: result } : {}
  })

  const maybeGaplessProp = (typeof gapless === 'boolean') ? { gapless } : {}

  const moddedChildren = React.Children.map(
    children,
    (child) => React.cloneElement(child, {
      ...columnPassBreakpointProps,
      ...maybeGaplessProp,
      ...child.props, // favor the child's existing breakpoint and gapless props
    }),
  )

  const finalRowProps = omit(restProps, columnPassBreakpoints)

  return React.createElement(component, finalRowProps, moddedChildren)
}

Row.propTypes = {
  children: PropTypes.node,

  gapless: PropTypes.bool,

  ...propTypesForRowBreakpoints,
  ...propTypesForColumnsPassBreakpoints,
}
