import React from 'react'
import PropTypes from 'prop-types'
import { css as glamorCSS, flush as glamorFlush } from 'glamor'
import glamorous, { ThemeProvider as GlamorousThemeProvider } from 'glamorous'

import { injectAllGlobal } from '../global'


export const styled = glamorous


export const flushStyles = glamorFlush


/**
 * Global-inject rule
 * @param  {string} target
 * @param  {object} styles
 * @return void
 */
export const injectRuleGlobal = (target, styles) =>
  glamorCSS.global(target, styles)


/**
 * Global-inject map of rules
 * @param  {object} ruleMap
 * @return void
 */
export const injectRuleMapGlobal = (ruleMap) =>
  Object.keys(ruleMap).forEach((rule) => injectRuleGlobal(rule, ruleMap[rule]))


/**
 * When flushStyles is called, any one-time-loaded fonts or keyframes
 * are not preserved. Remember them here so they can be rehydrated.
 * @type {Object}
 */
const rememberRules = {
  fonts: {},
  keyframes: {},
}


/**
 * Load a font declaration
 * @param  {object} font Font face declaration object
 * @return {string}      Font family
 */
export const loadFont = (font) => {
  const result = glamorCSS.fontFace(font)
  rememberRules.fonts[result] = font
  return result
}


/**
 * Load a keyframes declaration
 * @param  {object} keyframes Keyframes declaration object
 * @return {string}           Keyframes id
 */
export const loadKeyframes = (keyframes) => {
  const result = glamorCSS.fontFace(keyframes)
  rememberRules.keyframes[result] = keyframes
  return result
}


// helper for rehydrateRememberRules, see below
const rehydrateRememberRulesPart = (part, fn) => {
  Object.keys(part)
    .map((k) => fn(part[k]))
}

/**
 * Rehydrate fonts and keyframes that were loaded before a flush
 * @return void
 */
export const rehydrateRememberRules = () => {
  rehydrateRememberRulesPart(rememberRules.fonts, loadFont)
  rehydrateRememberRulesPart(rememberRules.keyframes, loadKeyframes)
}


/**
 * ThemeProvider provides a theme via context (mechanics from glamor.ThemeProvider),
 * and injects global styles (reset and base) according to current theme
 */
export class ThemeProvider extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)

    this.flushAndInject(props.theme)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      // New theme, so inject new global styles
      this.flushAndInject(nextProps.theme)
    }
  }

  flushAndInject = (theme) => {
    flushStyles() // flush all styles
    injectAllGlobal(theme) // inject reset and base styles
    rehydrateRememberRules() // inject previously-loaded fonts and keyframes
  }

  render() {
    const { theme, children } = this.props

    return React.createElement(GlamorousThemeProvider, { theme }, children)
  }
}
