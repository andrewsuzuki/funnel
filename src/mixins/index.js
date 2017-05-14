/**
 * Mixins
 */

import memoize from 'lodash.memoize'
import partial from 'lodash.partial'

import { size, borderRadius } from './polished'


// Re-exports


export * from './polished' // NOTE also used above

export { makeInputStyles } from './inputs'


// Mini-utils


/**
 * Make a function that turns a value into a single-prop object
 * @param  {string} name e.g. backgroundColor
 * @return {function}
 */
function makeBasicPropFn(name) {
  return (x) => ({ [name]: x })
}


/**
 * Wrap a mixin/property-map function with a theme-value predicate,
 * usually a theme enabler (ex. enableShadows)
 * to return an empty object when called if not enabled
 * @param  {string} key theme key (theme[key] should resolve to a bool)
 * @param  {func} propFn
 * @return {func}
 */
function wrapEnabler(key, propFn) {
  return (theme, ...args) =>
    (theme[key] ? propFn(...args) : {})
}


const decrementPixelValue = memoize((x) =>
  `${parseFloat(x) - 1}px`)


// CSS Attribute Values
// Convert values or attribute maps to CSS attribute value strings


export function gridPercentageValue(theme, n) {
  return `${(n / theme.gridColumns) * 100}%`
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


export function square(x) {
  return size(x, x)
}


// pseudo


export function pseudoBlock(pseudoType, styles) {
  return { [pseudoType]: styles }
}


// Pseudo elements
export const before = partial(pseudoBlock, '::before')
export const after = partial(pseudoBlock, '::after')
export const placeholder = partial(pseudoBlock, '::placeholder')
export const firstLetter = partial(pseudoBlock, '::first-letter')
export const firstLine = partial(pseudoBlock, '::first-line')
export const selection = partial(pseudoBlock, '::selection')
export const backdrop = partial(pseudoBlock, '::backdrop')
export const msExpand = partial(pseudoBlock, '::-ms-expand')

// Pseudo filter elements
export const firstChild = partial(pseudoBlock, ':first-child')
export const lastChild = partial(pseudoBlock, ':last-child')
// ...more

// Pseudo states
export const hover = partial(pseudoBlock, ':hover')
export const active = partial(pseudoBlock, ':active')
export const focus = partial(pseudoBlock, ':focus')
export const disabled = partial(pseudoBlock, ':disabled')
export const visited = partial(pseudoBlock, ':visited')
// ...more


// Clearfix


export function clearfix() {
  return after({
    display: 'block',
    content: '',
    clear: 'both',
  })
}


// Font-smoothing


export function smoothFonts() {
  return {
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    MozFontFeatureSettings: '\'liga\' on',
  }
}


// Border-radius


export const borderRadiusIfEnabled = wrapEnabler('enableRounded', borderRadius)


// Shadow (text and box)


export const textShadow = makeBasicPropFn('textShadow')
export const textShadowIfEnabled = wrapEnabler('enableShadows', textShadow)

export const boxShadow = makeBasicPropFn('boxShadow')
export const boxShadowIfEnabled = wrapEnabler('enableShadows', boxShadow)


// Transitions


export const transition = makeBasicPropFn('transition')
export const transitionIfEnabled = wrapEnabler('enableTransitions', transition)


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


// Breakpoints


export const nextBreakpointLookup = {
  tiny: 'mobile',
  mobile: 'tablet',
  tablet: 'desktop',
  desktop: 'widescreen',
  widescreen: null,
}


export const breakpointToMediaRange = (theme, device) =>
  ([theme.gridBreakpoints[device], null])


export const breakpointToMediaRangeMax = (theme, device) =>
  ([
    null,
    device === 'widescreen'
      ? null
      : decrementPixelValue(theme.gridBreakpoints[nextBreakpointLookup[device]]),
  ])


export const breakpointToMediaRangeTo = (theme, device) =>
  ([null, decrementPixelValue(theme.gridBreakpoints[device])])


export const breakpointToMediaRangeOnly = (theme, device) =>
  ([breakpointToMediaRange(theme, device)[0], breakpointToMediaRangeMax(theme, device)[1]])


export function breakpoint(theme, device, styles) {
  return mediaWidthRange(...breakpointToMediaRange(theme, device), styles)
}


export function breakpointMax(theme, device, styles) {
  return mediaWidthRange(...breakpointToMediaRangeMax(theme, device), styles)
}


export function breakpointTo(theme, device, styles) {
  return mediaWidthRange(...breakpointToMediaRangeTo(theme, device), styles)
}


export function breakpointOnly(theme, device, styles) {
  return mediaWidthRange(...breakpointToMediaRangeOnly(theme, device), styles)
}
