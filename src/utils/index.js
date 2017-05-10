/**
 * Utils
 */


import { css as glamorCSS } from 'glamor'
import glamorous, { ThemeProvider as GlamorousThemeProvider } from 'glamorous'

import { percentValue } from '../mixins'


// Re-exports
export * from './helpers'
export * from './color'
export * from './valids'
export * from './propTypes'
export * from './breakpoints'


// For now, just re-export styled HOC and ThemeProvider from glamorous
export const styled = glamorous
export const ThemeProvider = GlamorousThemeProvider

export const injectRuleGlobal = (target, styles) =>
  glamorCSS.global(target, styles)

export const injectRuleMapGlobal = (ruleMap) =>
  Object.keys(ruleMap).forEach((rule) => injectRuleGlobal(rule, ruleMap[rule]))

export const loadFont = glamorCSS.fontFace


export const modalCloseClassname = 'should-close-modal'


export const aliasWidthMap = {
  'three-quarters': percentValue(100 * (3 / 4)),
  'two-thirds': percentValue(100 * (2 / 3)),
  'one-half': percentValue(100 * (1 / 2)),
  'one-third': percentValue(100 * (1 / 3)),
  'one-quarter': percentValue(100 * (1 / 4)),
}
