/**
 * Utils
 */


import React from 'react'
import PropTypes from 'prop-types'
import { css as glamorCSS } from 'glamor'
import glamorous, { ThemeProvider as GlamorousThemeProvider } from 'glamorous'

import { injectAllGlobal } from '../global'

import { percentValue } from '../mixins'


// Re-exports
export * from './helpers'
export * from './color'
export * from './valids'
export * from './propTypes'
export * from './breakpoints'


// For now, just re-export styled HOC and ThemeProvider from glamorous
export const styled = glamorous

export class ThemeProvider extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)

    injectAllGlobal(props.theme)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      // New theme, so inject new global styles
      injectAllGlobal(nextProps.theme)
    }
  }

  render() {
    const { theme, children } = this.props

    return React.createElement(GlamorousThemeProvider, { theme }, children)
  }
}

export const injectRuleGlobal = (target, styles) =>
  glamorCSS.global(target, styles)

export const injectRuleMapGlobal = (ruleMap) =>
  Object.keys(ruleMap).forEach((rule) => injectRuleGlobal(rule, ruleMap[rule]))

export const loadFont = glamorCSS.fontFace

export const loadKeyframes = glamorCSS.keyframes


export const modalCloseClassname = 'should-close-modal'


export const aliasWidthMap = {
  'three-quarters': percentValue(100 * (3 / 4)),
  'two-thirds': percentValue(100 * (2 / 3)),
  'one-half': percentValue(100 * (1 / 2)),
  'one-third': percentValue(100 * (1 / 3)),
  'one-quarter': percentValue(100 * (1 / 4)),
}
