/**
 * Valids
 *
 * Collection of valid value sets
 */


export const validBreakpoints = ['tiny', 'mobile', 'tablet', 'desktop', 'widescreen']


export const validSizes = ['normal', 'small', 'large']


export const validBrands = ['primary', 'success', 'info', 'warning', 'danger']


export const validBrandsOrDefault = ['default', ...validBrands]


export const validBrandsOrDefaultOrLightOrDark = [
  'light',
  'dark',
  ...validBrandsOrDefault,
]


export const validInputTypes = [
  'text',
  'password',
  'datetime-local',
  'date',
  'month',
  'time',
  'week',
  'number',
  'email',
  'url',
  'search',
  'tel',
  'color',
]


export const validCheckableTypes = ['checkbox', 'radio']


export const validJustifyContent = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
]


export const validAlignItems = [
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch',
]


export const validAlignSelf = [
  'auto',
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch',
]


export const validAlignContent = [
  'stretch',
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
]


export const validIconSizes = ['normal', 1, 2, 3, 4, 5]
