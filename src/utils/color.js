/**
 * Color utilities
 */

import color from 'color'


/**
 * Lighten a color string by an amount (0-100; defaults to 15)
 */
export function lighten(colorString, amount = 15) {
  return color(colorString).lighten(amount / 100).hsl().string()
}


/**
 * Darken a color string by an amount (0-100; defaults to 20)
 */
export function darken(colorString, amount = 20) {
  return color(colorString).darken(amount / 100).hsl().string()
}


/**
 * Fade/transparentize a color string by an amount (0-100; defaults to 15)
 */
export function fade(colorString, amount = 15) {
  return color(colorString).fade(amount / 100).hsl().string()
}


/**
 * Opaquer a color string by an amount (0-100; defaults to 15)
 */
export function opaquer(colorString, amount = 15) {
  return color(colorString).opaquer(amount / 100).hsl().string()
}


/**
 * Saturate a color string by an amount (0-100; defaults to 15)
 */
export function saturate(colorString, amount = 15) {
  return color(colorString).saturate(amount / 100).hsl().string()
}


/**
 * Rotate a color string by an amount
 * (amount in degrees (negative or positive), defaults to 15)
 */
export function rotate(colorString, degrees = 15) {
  return color(colorString).rotate(degrees).hsl().string()
}


/**
 * Determine color luminence
 * @return {number}
 */
export function luminence(colorString) {
  return color(colorString).luminosity()
}


/**
 * Determine if a color is light (luminence over ~0.55)
 * @return {Boolean}
 */
export function isLight(colorString) {
  return luminence(colorString) > 0.55
}


/**
 * Determine if a color is dark (luminence under ~0.55)
 * @return {Boolean}
 */
export function isDark(colorString) {
  return luminence(colorString) <= 0.55
}
