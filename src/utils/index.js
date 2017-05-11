/**
 * Utils
 */


import { percentValue } from '../mixins'


// Re-exports
export * from './helpers'
export * from './color'
export * from './valids'
export * from './propTypes'
export * from './breakpoints'
export * from './styleAndTheme'
export * from './backgroundContext'


export const modalCloseClassname = 'should-close-modal'


export const aliasWidthMap = {
  'three-quarters': percentValue(100 * (3 / 4)),
  'two-thirds': percentValue(100 * (2 / 3)),
  'one-half': percentValue(100 * (1 / 2)),
  'one-third': percentValue(100 * (1 / 3)),
  'one-quarter': percentValue(100 * (1 / 4)),
}
