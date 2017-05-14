// Re-export some nice mixins from styled-components/polished as our own.
// Just in case things change.

import {
  // shorthands
  animation,
  backgroundImages,
  backgrounds,
  // borderColor,
  borderRadius,
  // borderStyle,
  // borderWidth,
  buttons,
  // margin,
  // padding,
  position,
  size,
  textInputs,
  transitions,
} from 'polished'


export {
  // shorthands
  animation,
  backgroundImages,
  backgrounds,
  // borderColor,
  borderRadius,
  // borderStyle,
  // borderWidth,
  buttons,
  // margin,
  // padding,
  position,
  size,
  textInputs,
  transitions,
}


// NOTE
// Below are replacements for polished directional properties that have
// hypenated attribute names until they switch to camelcase
// https://github.com/styled-components/polished/issues/167
// TODO switch back to polished when v2 arrives

function generateStyles(fourProperties, valuesWithDefaults) {
  const styles = {}
  for (let i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i]) {
      styles[fourProperties[i]] = valuesWithDefaults[i]
    }
  }
  return styles
}


function directionalProperty(fourProperties, values) {
  const [
    firstValue,
    secondValue = firstValue,
    thirdValue = firstValue,
    fourthValue = secondValue,
  ] = values

  const valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue]

  return generateStyles(fourProperties, valuesWithDefaults)
}


export function margin(...values) {
  return directionalProperty(
    ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    values,
  )
}


export function padding(...values) {
  return directionalProperty(
    ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    values,
  )
}


export function borderColor(...values) {
  return directionalProperty(
    ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
    values,
  )
}


export function borderStyle(...values) {
  return directionalProperty(
    ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
    values,
  )
}


export function borderWidth(...values) {
  return directionalProperty(
    ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
    values,
  )
}
