/**
 * React Prop Types
 */

import PropTypes from 'prop-types'

import * as valids from './valids'

import { breakpointsMapAndMerge, breakpointNameToColumnsPassBreakpointName } from './breakpoints'


/**
 * PropType for valid breakpoint/device
 */
export const propTypeBreakpoint = PropTypes.oneOf(valids.validBreakpoints)


/**
 * PropType for valid size
 */
export const propTypeSize = PropTypes.oneOf(valids.validSizes)


/**
 * PropType for valid brand
 */
export const propTypeBrand = PropTypes.oneOf(valids.validBrands)


/**
 * PropType for valid brand or 'default'
 */
export const propTypeBrandOrDefault = PropTypes.oneOf(valids.validBrandsOrDefault)


/**
 * PropType for valid brand or 'default' or 'light' or 'dark'
 */
export const propTypeBrandOrDefaultOrLightOrDark = PropTypes.oneOf(
  valids.validBrandsOrDefaultOrLightOrDark,
)


/**
 * PropType for valid Input type
 */
export const propTypeInputType = PropTypes.oneOf(valids.validInputTypes)


/**
 * PropType for valid Checkable type (checkbox/radio)
 */
export const propTypeCheckableType = PropTypes.oneOf(valids.validCheckableTypes)


/**
 * PropType for valid align-items value
 */
export const propTypeAlignItems = PropTypes.oneOf(valids.validAlignItems)


/**
 * PropType for valid Icon size
 */
export const propTypeIconSize = PropTypes.oneOf(valids.validIconSizes)


// Breakpoints-related


/**
 * React PropType for valid Column breakpoint
 */
export const propTypeColumnBreakpoint = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.oneOf([true]), // allow bool true
])


/**
 * Helper: map of breakpoints to propTypeColumnBreakpoint
 */
export const propTypesForColumnBreakpoints = breakpointsMapAndMerge((bkpt) =>
  ({ [bkpt]: propTypeColumnBreakpoint }))


/**
 * Helper: map of breakpoints to PropTypes.string
 */
export const propTypesForRowBreakpoints = breakpointsMapAndMerge((bkpt) =>
  ({ [bkpt]: PropTypes.string }))


/**
 * Helper: map of `columns${bkpt}`s to propTypeColumnBreakpoint
 */
export const propTypesForColumnsPassBreakpoints = breakpointsMapAndMerge((bkpt) =>
  ({ [breakpointNameToColumnsPassBreakpointName(bkpt)]: propTypeColumnBreakpoint }))


// Field prop types


export const propTypeFieldId = PropTypes.string


export const propTypeFieldMeta = PropTypes.shape({
  id: propTypeFieldId.isRequired,

  size: propTypeSize,
  brand: propTypeBrand,
  disabled: PropTypes.bool,

  horizontal: propTypeColumnBreakpoint,
  grouped: propTypeColumnBreakpoint,
  addons: PropTypes.bool,
})


/**
 * React PropType for field context object
 * (no isRequired)
 */
export const propTypeFieldContext = PropTypes.shape({
  meta: propTypeFieldMeta.isRequired,
  rootMeta: propTypeFieldMeta.isRequired,
  idHierarchy: PropTypes.arrayOf(propTypeFieldId).isRequired,
})


// Background context


export const propTypeBackgroundContext = PropTypes.shape({
  backgroundColor: PropTypes.string.isRequired,
  backgroundColorIsLight: PropTypes.bool.isRequired,
  textColorAuto: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textColorGiven: PropTypes.string,
})
