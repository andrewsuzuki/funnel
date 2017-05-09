/**
 * Mixins
 */

import memoize from 'lodash.memoize'
import partial from 'lodash.partial'

import theme from '../theme'

import { capitalize } from '../utils'


// Re-exports


export { makeInputStyles } from './inputs'


// Mini-utils


/**
 * Create a new empty object
 * @return {obj} a new empty object ({})
 */
function createEmptyObject() {
  return {}
}


/**
 * Make a function that turns a value into a single-prop object
 * @param  {string} name e.g. backgroundColor
 * @return {function}
 */
function makeBasicPropFn(name) {
  return (x) => ({ [name]: x })
}


/**
 * Wrap a mixin/property-map function with a predicate,
 * usually a theme enabler (ex. theme.enableShadows)
 * to return an empty object when called if pred===false
 * @param  {bool} pred
 * @param  {func} propFn
 * @return {func}
 */
function wrapEnabler(pred, propFn) {
  return pred ? propFn : createEmptyObject
}


// CSS Attribute Values
// Convert values or attribute maps to CSS attribute value strings


/**
 * Look up a theme value
 * @param  {string} id id, optionally using '.' to
 *                     look up object-nested values
 *                     (ex. 'gridBreakpoints.mobile')
 * @return {mixed}     theme value
 */
export function themeValue(id) {
  const parts = id.split('.')
  return parts.reduce(
    (o, part) => {
      if (typeof o !== 'object') {
        return undefined
      }

      const result = o[part]

      if (typeof result === 'undefined') {
        return undefined
      }

      return result
    },
    theme,
  )
}


export function gridPercentageValue(n) {
  return `${(n / theme.gridColumns) * 100}%`
}


export function brandValue(brand) {
  return themeValue(`brand${capitalize(brand)}`)
}


export function unitlessValue(x) {
  return `${x}`
}


export function pixelValue(x) {
  return `${x}px`
}


export function percentValue(x) {
  return `${x}%`
}


export function emValue(x) {
  return `${x}em`
}


export function remValue(x) {
  return `${x}rem`
}


export function millisecondsValue(x) {
  return `${x}ms`
}


export function secondsValue(x) {
  return `${x}s`
}


export function rgbValue(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`
}


export function rgbaValue(r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}


export function translateValue(x, y) {
  return `translate(${x}, ${y})`
}


export function translateXValue(x) {
  return `translateX(${x})`
}


export function translateYValue(x) {
  return `translateY(${x})`
}


export function borderValue({ width, style, color } = { width: pixelValue(1), style: 'solid', color: rgbValue(0, 0, 0) }) {
  return `${width} ${style} ${color}`
}


export function animationValue({ name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState } = { name: 'none', duration: secondsValue(0), timingFunction: 'ease', delay: secondsValue(0), iterationCount: unitlessValue(1), direction: 'normal', fillMode: 'none', playState: 'running' }) {
  return `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
}


export function transitionValue({ delay, duration, property, timingFunction } = { delay: secondsValue(0), duration: secondsValue(0), property: 'all', timingFunction: 'ease' }) {
  return `${delay} ${duration} ${property} ${timingFunction}`
}


// Size


export const height = makeBasicPropFn('height')
export const width = makeBasicPropFn('width')
export const maxHeight = makeBasicPropFn('maxHeight')
export const maxWidth = makeBasicPropFn('maxWidth')
export const minHeight = makeBasicPropFn('minHeight')
export const minWidth = makeBasicPropFn('minWidth')

export function size(x, y) {
  return { ...width(x), ...height(y) }
}

export function square(x) {
  return size(x, x)
}


// Color


export const color = makeBasicPropFn('color')

export function standardColor(color = 'text') {
  return { color: theme.palette[color] || rgbValue(0, 0, 0) }
}

export function standardBackgroundColor(color = 'background') {
  return { backgroundColor: theme.palette[color] || rgbValue(255, 255, 255) }
}


// Background


export const backgroundColor = makeBasicPropFn('backgroundColor')
export const backgroundImage = makeBasicPropFn('backgroundImage')


// Position


export const position = makeBasicPropFn('position')


// Margin, padding, position*ing


export function margin(...args) {
  return { margin: args.join(' ') }
}

export const marginTop = makeBasicPropFn('marginTop')
export const marginRight = makeBasicPropFn('marginRight')
export const marginBottom = makeBasicPropFn('marginBottom')
export const marginLeft = makeBasicPropFn('marginLeft')


export function padding(...args) {
  return { padding: args.join(' ') }
}

export const paddingTop = makeBasicPropFn('paddingTop')
export const paddingRight = makeBasicPropFn('paddingRight')
export const paddingBottom = makeBasicPropFn('paddingBottom')
export const paddingLeft = makeBasicPropFn('paddingLeft')


export const top = makeBasicPropFn('top')
export const right = makeBasicPropFn('right')
export const bottom = makeBasicPropFn('bottom')
export const left = makeBasicPropFn('left')


// Display


export const display = makeBasicPropFn('display')


// pseudo


export function pseudoBlock(pseudoType, styles) {
  return { [`:${pseudoType}`]: styles }
}


export const before = partial(pseudoBlock, 'before')
export const after = partial(pseudoBlock, 'after')
export const firstChild = partial(pseudoBlock, 'first-child')
export const lastChild = partial(pseudoBlock, 'last-child')

export const hover = partial(pseudoBlock, 'hover')
export const active = partial(pseudoBlock, 'active')
export const focus = partial(pseudoBlock, 'focus')
export const disabled = partial(pseudoBlock, 'disabled')
export const visited = partial(pseudoBlock, 'visited')


// Media queries


export function media(query, styles) {
  return { [`@media ${query}`]: styles }
}


export function mediaWidthRange(from, to, styles) {
  const partMin = from ? ` and (min-width: ${from})` : ''
  const partMax = to ? ` and (max-width: ${to})` : ''
  const query = `screen${partMin}${partMax}`

  return media(query, styles)
}


// Clearfix


export function clearfix() {
  return after({
    ...display('block'),
    content: '',
    clear: 'both',
  })
}


// Border


export function border(attrs) {
  return { border: borderValue(attrs) }
}

export const borderStyle = makeBasicPropFn('borderStyle')
export const borderWidth = makeBasicPropFn('borderWidth')
export const borderColor = makeBasicPropFn('borderColor')


// Border-radius


export function borderRadius(...args) {
  return { borderRadius: args.join(' ') }
}


export const borderRadiusIfEnabled = wrapEnabler(theme.enableRounded, borderRadius)


// Visibility, opacity


export const zIndex = makeBasicPropFn('zIndex')
export const opacity = makeBasicPropFn('opacity')
export const visibility = makeBasicPropFn('visibility')


// Flex


export const justifyContent = makeBasicPropFn('justifyContent')
export const alignItems = makeBasicPropFn('alignItems')
export const alignSelf = makeBasicPropFn('alignSelf')
export const alignContent = makeBasicPropFn('alignContent')
export const flexDirection = makeBasicPropFn('flexDirection')
export const flexGrow = makeBasicPropFn('flexGrow')
export const flexShrink = makeBasicPropFn('flexShrink')
export const flexBasis = makeBasicPropFn('flexBasis')
export const flexWrap = makeBasicPropFn('flexWrap')


// Overflow


export const overflow = makeBasicPropFn('overflow')
export const overflowX = makeBasicPropFn('overflowX')
export const overflowY = makeBasicPropFn('overflowY')


// Font


export const fontFamily = makeBasicPropFn('fontFamily')
export const fontSize = makeBasicPropFn('fontSize')
export const fontWeight = makeBasicPropFn('fontWeight')


// Text (non-font)


export const lineHeight = makeBasicPropFn('lineHeight')
export const letterSpacing = makeBasicPropFn('letterSpacing')
export const textDecoration = makeBasicPropFn('textDecoration')
export const textAlign = makeBasicPropFn('textAlign')
export const textShadow = makeBasicPropFn('textShadow')

export const textShadowIfEnabled = wrapEnabler(theme.enableShadows, textShadow)


// Misc


export const transform = makeBasicPropFn('transform')
export const float = makeBasicPropFn('float')
export const cursor = makeBasicPropFn('cursor')
export const verticalAlign = makeBasicPropFn('verticalAlign')
export const boxShadow = makeBasicPropFn('boxShadow')

export const boxShadowIfEnabled = wrapEnabler(theme.enableShadows, boxShadow)


// Breakpoints


export const breakpointToMediaRange = memoize((device) =>
  [theme.gridBreakpoints[device], null])


// mini-util
const decrementPixelValue = memoize((x) =>
  `${parseFloat(x) - 1}px`)


export const nextBreakpointLookup = {
  tiny: 'mobile',
  mobile: 'tablet',
  tablet: 'desktop',
  desktop: 'widescreen',
  widescreen: null,
}


export const breakpointToMediaRangeMax = memoize((device) =>
  [
    null,
    device === 'widescreen'
      ? null
      : decrementPixelValue(theme.gridBreakpoints[nextBreakpointLookup[device]]),
  ])


export const breakpointToMediaRangeTo = memoize((device) =>
  [null, decrementPixelValue(theme.gridBreakpoints[device])])


export const breakpointToMediaRangeOnly = memoize((device) =>
  [breakpointToMediaRange(device)[0], breakpointToMediaRangeMax(device)[1]])


export function breakpoint(device, styles) {
  return mediaWidthRange(...breakpointToMediaRange(device), styles)
}


export function breakpointMax(device, styles) {
  return mediaWidthRange(...breakpointToMediaRangeMax(device), styles)
}


export function breakpointTo(device, styles) {
  return mediaWidthRange(...breakpointToMediaRangeTo(device), styles)
}


export function breakpointOnly(device, styles) {
  return mediaWidthRange(...breakpointToMediaRangeOnly(device), styles)
}


// Transitions


export const transition = makeBasicPropFn('transition')

export const transitionIfEnabled = wrapEnabler(theme.enableTransitions, transition)
