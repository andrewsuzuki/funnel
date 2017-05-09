/**
 * Utils
 */


import glamorous, { ThemeProvider as GlamorousThemeProvider } from 'glamorous'

import * as mixins from '../mixins'


// Re-exports
export * from './helpers'
export * from './color'
export * from './valids'
export * from './propTypes'
export * from './breakpoints'
export * from './styleAndTheme'


// For now, just re-export styled HOC and ThemeProvider from glamorous
export const styled = glamorous
export const ThemeProvider = GlamorousThemeProvider


export const modalCloseClassname = 'should-close-modal'


export const aliasWidthMap = {
  'three-quarters': mixins.percentValue(100 * (3 / 4)),
  'two-thirds': mixins.percentValue(100 * (2 / 3)),
  'one-half': mixins.percentValue(100 * (1 / 2)),
  'one-third': mixins.percentValue(100 * (1 / 3)),
  'one-quarter': mixins.percentValue(100 * (1 / 4)),
}
