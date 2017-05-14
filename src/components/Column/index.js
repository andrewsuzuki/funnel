import React from 'react'
import PropTypes from 'prop-types'
import partial from 'lodash.partial'

import {
  styled,
  halvePixels,
  validBreakpoints,
  validAlignSelf,
  propTypesForColumnBreakpoints,
  aliasWidthMap,
  breakpointsMapAndMerge,
  breakpointsCreateSpecStringParser,
  breakpointsCreateBreakpointsForPropSpecStrings,
} from '../../utils'

import { breakpointOnly, gridPercentageValue, padding } from '../../mixins'


const makeGutterStylesForBreakpoint = (t, breakpoint) =>
  breakpointOnly(t, breakpoint, {
    ...padding(null, halvePixels(t.gridGutters[breakpoint])),
  })


const specResolver = (theme, spec) => {
  if (spec === 'auto') {
    // auto width

    return {
      flexBasis: 0,
      maxWidth: 'auto',
    }
  } else if (/^\d+$/.test(spec)) {
    // integer width

    const cols = parseInt(spec, 10)

    if (cols >= 1 && cols <= theme.gridColumns) {
      const width = gridPercentageValue(theme, cols)

      return {
        flexBasis: width,
        maxWidth: width,
      }
    }
  } else if (Object.keys(aliasWidthMap).includes(spec)) {
    // alias width

    const width = aliasWidthMap[spec]

    return {
      flexBasis: width,
      maxWidth: width,
    }
  } else if (spec.startsWith('offset:')) {
    // offset

    const amountString = spec.slice(7)

    if (/^\d+$/.test(amountString)) {
      const amount = parseInt(amountString, 10)

      if (amount >= 0 && amount < theme.gridColumns) {
        return {
          marginLeft: gridPercentageValue(theme, amount),
        }
      }
    }
  } else if (spec.startsWith('align-self:')) {
    // align-self

    const alignSelf = spec.slice(11)

    if (validAlignSelf.includes(alignSelf)) {
      return {
        alignSelf,
      }
    }
  }

  // catch:
  // return o.g. spec string; the parser will pick this up as an error
  return spec
}


const propGuardFn = (prop) => (prop === true ? 'auto' : prop)


const specStringParser = breakpointsCreateSpecStringParser(specResolver)


const parsedGuardFn = (parsed) => {
  // check if a flexBasis was set (i.e. if a width value (auto|#) was set)
  const isBasisSet = Object.keys(parsed).includes('flexBasis')

  // correct with 'auto' if not set
  return isBasisSet
    ? parsed
    : { ...parsed, ...specResolver(null, 'auto') }
}


const StyledDivGapless = styled.div((props, t) => ({
  flexGrow: 1,
  flexShrink: 1,

  ...breakpointsCreateBreakpointsForPropSpecStrings(
    t,
    props,
    // if a prop is bool true, then default to 'auto'
    propGuardFn,
    // our column string parser
    specStringParser,
    // guard parsed results by...
    parsedGuardFn,
  ),
}))


const StyledDivGaps = styled(StyledDivGapless)((p, t) => ({
  // Gutters
  ...breakpointsMapAndMerge(partial(makeGutterStylesForBreakpoint, t)),
}))


export default function Column({ gapless, children, ...restProps }) {
  const component = gapless ? StyledDivGapless : StyledDivGaps

  // test if restProps includes at least one valid breakpoint
  const propsIncludeSomeBreakpoint = Object.keys(restProps).some((x) =>
    validBreakpoints.includes(x))

  // default to tablet=auto if no breakpoint was included in props
  const realProps = propsIncludeSomeBreakpoint
    ? restProps
    : { tablet: 'auto', ...restProps }

  return React.createElement(component, realProps, children)
}

Column.propTypes = {
  children: PropTypes.node,

  gapless: PropTypes.bool,

  // ex. tiny: '...' or tablet: true
  ...propTypesForColumnBreakpoints,
}
