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
 * @param  {string} name      id/name
 * @param  {object} timeline  Keyframes declaration object
 * @return {string}           Keyframes id
 */
export const loadKeyframes = (name, timeline) => {
  const result = glamorCSS.keyframes(name, timeline)

  const keyframes = rememberRules.keyframes

  if (!keyframes[name]) {
    keyframes[name] = {}
  }

  const entry = keyframes[name]

  // must mutate existing object
  entry.name = result
  entry.originalName = name
  entry.timeline = timeline

  return entry
}


/**
 * Rehydrate fonts and keyframes that were loaded before a flush
 * @return void
 */
export const rehydrateRememberRules = () => {
  // fonts
  const fonts = rememberRules.fonts
  Object.keys(fonts).forEach((name) => loadFont(fonts[name]))

  // keyframes
  const keyframes = rememberRules.keyframes
  Object.keys(keyframes).forEach((name) =>
    loadKeyframes(name, keyframes[name].timeline))
}


/**
 * OtepProvider provides a theme via context (mechanics from glamor.OtepProvider),
 * and injects global styles (reset and base) according to current theme
 */
export class OtepProvider extends React.Component {
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
