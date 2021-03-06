/**
 * Basic utils / helpers
 *
 * No internal dependencies allowed!
 */

import React from 'react'
import memoize from 'lodash.memoize'


// environment-safe console warn
export const warn = (typeof console === 'object' && console.warn) // eslint-disable-line no-console
  ? console.warn // eslint-disable-line no-console
  : () => undefined


/**
 * Capitalize first letter of string (memoized)
 */
export const capitalize = memoize((str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`)


/**
 * Negate a numberical string
 * ex. negate('3px') => '-3px'
 */
export const negate = (x) => `-${x}`


/**
 * Negate a pixel string
 * ex. halvePixels('4.2px') => '2.1px'
 */
export const halvePixels = (x) => `${parseFloat(x) / 2}px`


/**
 * Get display name of component
 * @return {string}
 */
export function getDisplayName(component) {
  return component.displayName || component.name || 'Component'
}


/**
 * HOC for a component with props pre-applied
 * @param  {string}                 New component display name
 * @param  {React.Component} component
 * @param  {Object} [afterProps={}] Spread after the actual props
 *                                  (will override any collisions)
 * @param  {Object} [preProps={}]   Spread before the actual props
 *                                  (e.g. defaultProps)
 *                                  (can be overriden by collisions)
 * @return {React.Component}
 */
export function componentWithProps(displayName, component, afterProps = {}, preProps = {}) {
  const c = (inProps) => {
    const props = { ...preProps, ...inProps, ...afterProps }
    return React.createElement(component, props)
  }

  c.displayName = displayName

  return c
}
