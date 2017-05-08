/**
 * Style and Theme
 */

import isPlainObject from 'lodash.isplainobject'

import * as mixins from '../mixins'

import { darken, lighten, saturate, rotate, fade } from './color'

import { warn } from './helpers'


export const themeValueModifiers = {
  // Color
  dark: (color) => darken(color, 15),
  dark5: (color) => darken(color, 5),
  dark10: (color) => darken(color, 10),
  dark12: (color) => darken(color, 12),
  dark15: (color) => darken(color, 15),
  dark20: (color) => darken(color, 20),
  dark25: (color) => darken(color, 25),
  light: (color) => lighten(color, 15),
  light5: (color) => lighten(color, 5),
  light10: (color) => lighten(color, 10),
  light12: (color) => lighten(color, 12),
  light15: (color) => lighten(color, 15),
  light20: (color) => lighten(color, 20),
  light25: (color) => lighten(color, 25),
  saturate5: (color) => saturate(color, 5),
  saturate10: (color) => saturate(color, 10),
  rotate10: (color) => rotate(color, 10),
  rotateNeg10: (color) => rotate(color, -10),
  fade25: (color) => fade(color, 25),

  // Length
  negate: (value) => `-${value}`,
  halvePixels: (value) => `${parseFloat(value) / 2}px`,
}


/**
 * Expand a (possibly) shorthand theme value
 */
export function expandThemeValue(s) {
  // ex. s = ~brandPrimary
  if (typeof s !== 'string' || !s.startsWith('~')) {
    return s
  }

  const [shortValue, ...modifiers] = s.slice(1).split('~')

  const expanded = mixins.themeValue(shortValue)

  if (expanded === null || expanded === undefined) {
    warn(`theme value '${shortValue}' (in '${s}') does not exist`)
    return s
  }

  const modified = modifiers.reduce(
    (acc, modifierId) => {
      const modifier = themeValueModifiers[modifierId]
      if (!modifier) {
        warn(`shorthand theme value modifier '${modifierId}' (in '${s}') does not exist, was not applied'`)
        return acc
      }

      const result = modifier(acc)

      if (result === null || result === undefined) {
        warn(`shorthand theme value modifier '${modifierId} (in '${s}') could not be applied`)
        return acc
      }

      return result
    },
    expanded,
  )

  return modified
}


/**
 * Shorthand properties (static)
 *
 * NOTE See below expandStyles definition for more
 * properties set with dependencies on the others
 */
export const shorthandPropertiesStatic = {
  absolute: mixins.position('absolute'),
  relative: mixins.position('relative'),
  static: mixins.position('static'),
  fixed: mixins.position('fixed'),

  atTop: mixins.top(0),
  atLeft: mixins.left(0),
  atBottom: mixins.bottom(0),
  atRight: mixins.right(0),

  fullHeight: mixins.height(mixins.percentValue(100)),
  fullWidth: mixins.width(mixins.percentValue(100)),

  pointer: mixins.cursor('pointer'),

  noListStyle: { listStyleType: 'none' },

  noOutline: { outline: 0 },

  nowrap: { whiteSpace: 'nowrap' },
}

export const shorthandPropertiesValued = {
  // sizing
  w: mixins.width,
  h: mixins.height,
  size: mixins.size,
  square: mixins.square,
  hMax: mixins.maxHeight,
  wMax: mixins.maxWidth,
  hMin: mixins.minHeight,
  wMin: mixins.minWidth,

  // font
  ff: mixins.fontFamily,
  fs: mixins.fontSize,
  fw: mixins.fontWeight,

  // background
  bgc: mixins.backgroundColor,
  bgi: mixins.backgroundImage,

  // display
  d: mixins.display,

  // relative position
  t: mixins.top,
  r: mixins.right,
  b: mixins.bottom,
  l: mixins.left,

  // margin, padding
  m: mixins.margin,
  mTop: mixins.marginTop,
  mRight: mixins.marginRight,
  mBottom: mixins.marginBottom,
  mLeft: mixins.marginLeft,
  p: mixins.padding,
  pTop: mixins.paddingTop,
  pRight: mixins.paddingRight,
  pBottom: mixins.paddingBottom,
  pLeft: mixins.paddingLeft,

  // visibility
  o: mixins.opacity,
  z: mixins.zIndex,
  visibility: mixins.visibility,

  // border
  bordS: mixins.borderStyle,
  bordW: mixins.borderWidth,
  bordC: mixins.borderColor,

  // border-radius
  radius: mixins.borderRadius,
  '!radius': mixins.borderRadiusIfEnabled,

  // flex
  fJustifyContent: mixins.justifyContent,
  fAlignItems: mixins.alignItems,
  fAlignSelf: mixins.alignSelf,
  fAlignContent: mixins.alignContent,
  fDirection: mixins.flexDirection,
  fGrow: mixins.flexGrow,
  fShrink: mixins.flexShrink,
  fBasis: mixins.flexBasis,
  fWrap: mixins.flexWrap,

  // overflow
  over: mixins.overflow,
  overX: mixins.overflowX,
  overY: mixins.overflowY,

  // text (non-font)
  c: mixins.color,
  tDecor: mixins.textDecoration,
  tAlign: mixins.textAlign,
  tShadow: mixins.textShadow,
  '!tShadow': mixins.textShadowIfEnabled,
  ls: mixins.letterSpacing,
  lh: mixins.lineHeight,

  // misc
  float: mixins.float,
  cursor: mixins.cursor,
  vAlign: mixins.verticalAlign,
  bShadow: mixins.boxShadow,
  '!bShadow': mixins.boxShadowIfEnabled,
  trans: mixins.transition,
  '!trans': mixins.transitionIfEnabled,
  transform: mixins.transform,
}

const shorthandPropertiesValuedCached = {}

/**
 * Expand shorthand styles
 * @return {obj}
 */
export function expandStyles(...args) {
  const styleMaps = args.map((arg) => {
    if (!arg) {
      return {}
    }

    // If arg is a plain object, just merge it as-is
    if (isPlainObject(arg)) {
      return arg
    }

    if (typeof arg !== 'string') {
      warn('shorthand attribute must be string')
      return {}
    }

    if (arg.includes('/')) {
      // look up cached value
      const cached = shorthandPropertiesValuedCached[arg]
      if (cached) {
        return cached
      }

      const [shortAttr, ...attrArgs] = arg.split('/')
      const propFn = shorthandPropertiesValued[shortAttr]

      if (!propFn) {
        warn(`[valued] shorthand attribute '${shortAttr}' does not exist (was not applied)`)
        return {}
      }

      // Expand args containing theme values,
      // then spread into prop fn
      const result = propFn(...attrArgs.map(expandThemeValue))

      // cache it
      shorthandPropertiesValuedCached[arg] = result

      return result
    }

    const prop = shorthandPropertiesStatic[arg]

    if (!prop) {
      warn(`[static] shorthand attribute '${arg}' does not exist (was not applied)`)
      return {}
    }

    return prop
  }, {})

  return Object.assign({}, ...styleMaps)
}


// Further shorthandPropertiesStatic (with dependencies)

shorthandPropertiesStatic.atTopLeft = expandStyles('atTop', 'atLeft')

shorthandPropertiesStatic.absoluteCover = expandStyles('absolute', 'fullHeight', 'fullWidth', 'atTopLeft')

shorthandPropertiesStatic.absoluteVerticalCenter = {
  ...expandStyles('absolute', 'l/50%'),
  transform: mixins.translateXValue(mixins.percentValue(-50)),
}

shorthandPropertiesStatic.flexCenter = expandStyles('fJustifyContent/center', 'fAlignItems/center')
