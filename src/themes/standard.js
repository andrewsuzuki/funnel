/**
 * Theme
 */

import { darken, fade } from '../utils'

import { iconFontFace } from '../global/fonts'


const theme = {}


// Enablers


theme.enableRounded = true
theme.enableShadows = true
theme.enableTransitions = true


// Grid + Breakpoints


theme.gridColumns = 12


theme.gridBaseGutterWidth = '30px'


theme.gridGutters = {
  tiny: theme.gridBaseGutterWidth,
  mobile: theme.gridBaseGutterWidth,
  tablet: theme.gridBaseGutterWidth,
  desktop: theme.gridBaseGutterWidth,
  widescreen: theme.gridBaseGutterWidth,
}


theme.gridBreakpoints = {
  tiny: '0px',
  mobile: '576px',
  tablet: '768px',
  desktop: '992px',
  widescreen: '1200px',
}


// Z-index


theme.zIndices = {
  selectCaret: 4,
  modal: 20,
  modalClose: 22,
}


// The max widths of Container
// for different screen sizes
theme.gridContainerMaxWidths = {
  mobile: '540px',
  tablet: '720px',
  desktop: '960px',
  widescreen: '1140px',
}


// Color palette


// Basic
theme.transparent = 'transparent'
theme.black = '#000000'
theme.white = '#ffffff'

// Grayscale
theme.grayDark = '#292b2c'
theme.gray = '#464a4c'
theme.grayLight = '#636c72'
theme.grayLighter = '#eceeef'
theme.grayLightest = '#f7f7f9'

theme.colorMoody = '#585563'
theme.colorDark = '#2B4141'

// Brand
theme.brandPrimary = '#2998FF'
theme.brandSuccess = '#32E875'
theme.brandInfo = '#56EEF4'
theme.brandWarning = '#F39237'
theme.brandDanger = '#F25C54'

// Body color
theme.baseBackgroundColor = theme.white
theme.baseTextColor = theme.grayDark


// Link


theme.linkColor = theme.brandPrimary
theme.linkDecoration = 'none'
theme.linkHoverColor = darken(theme.brandPrimary, 15)
theme.linkActiveColor = darken(theme.brandPrimary, 25)
theme.linkHoverDecoration = 'underline'


// Background Contexts


theme.backgroundContexts = {
  default: {
    backgroundColor: theme.transparent,
    textColor: theme.white,
    linkColor: theme.linkColor,
    linkHoverColor: theme.linkHoverColor,
    linkActiveColor: theme.linkActiveColor,
  },
  light: {
    backgroundColor: theme.white,
    textColor: theme.gray,
    linkColor: theme.linkColor,
    linkHoverColor: theme.linkHoverColor,
    linkActiveColor: theme.linkActiveColor,
  },
  dark: {
    backgroundColor: theme.grayDark,
    textColor: theme.white,
    linkColor: theme.linkColor,
    linkHoverColor: theme.linkHoverColor,
    linkActiveColor: theme.linkActiveColor,
  },
  primary: {
    backgroundColor: theme.brandPrimary,
    textColor: theme.white,
    linkColor: theme.white,
    linkHoverColor: theme.white,
    linkActiveColor: theme.white,
  },
  success: {
    backgroundColor: theme.brandSuccess,
    textColor: theme.white,
    linkColor: theme.white,
    linkHoverColor: theme.white,
    linkActiveColor: theme.white,
  },
  info: {
    backgroundColor: theme.brandInfo,
    textColor: theme.white,
    linkColor: theme.white,
    linkHoverColor: theme.white,
    linkActiveColor: theme.white,
  },
  warning: {
    backgroundColor: theme.brandWarning,
    textColor: theme.white,
    linkColor: theme.white,
    linkHoverColor: theme.white,
    linkActiveColor: theme.white,
  },
  danger: {
    backgroundColor: theme.brandDanger,
    textColor: theme.white,
    linkColor: theme.white,
    linkHoverColor: theme.white,
    linkActiveColor: theme.white,
  },
}


// Root ::selection


theme.baseSelectionBackgroundColor = null // null = do not apply
theme.baseSelectionTextColor = null // null = do not apply


// Font

theme.fontWeightNormal = 400
theme.fontWeightBold = 700

theme.baseFontFamily = '\'Helvetica Neue\', Helvetica, Arial, sans-serif'
theme.baseFontSize = '16px'
theme.baseFontWeight = theme.fontWeightNormal
theme.baseLineHeight = 1.5

theme.fontSizeNormal = '1rem'
theme.fontSizeExtraSmall = '0.75rem'
theme.fontSizeSmall = '0.875rem'
theme.fontSizeLarge = '1.25rem'


// Border


theme.borderWidth = '1px'
theme.borderColor = theme.grayLighter


// Border radius


theme.borderRadiusNormal = '0.25rem'
theme.borderRadiusLarge = '0.3rem'
theme.borderRadiusSmall = '0.15rem'
theme.borderRadiusInfinite = '290486px'


// Misc base values


theme.cursorDisabled = 'not-allowed'
theme.disabledOpacity = 0.65


// Paragraph


theme.paragraphMarginBottom = '1rem'


// Component: H1-H6


theme.headingFontFamily = theme.baseFontFamily

theme.baseHeadingMarginBottom = '0.5rem'
theme.h1MarginBottom = theme.baseHeadingMarginBottom
theme.h2MarginBottom = theme.baseHeadingMarginBottom
theme.h3MarginBottom = theme.baseHeadingMarginBottom
theme.h4MarginBottom = theme.baseHeadingMarginBottom
theme.h5MarginBottom = theme.baseHeadingMarginBottom
theme.h6MarginBottom = theme.baseHeadingMarginBottom

theme.h1FontSize = '2.5rem'
theme.h2FontSize = '2rem'
theme.h3FontSize = '1.75rem'
theme.h4FontSize = '1.5rem'
theme.h5FontSize = '1.25rem'
theme.h6FontSize = '1rem'

theme.h1FontWeight = 800
theme.h2FontWeight = 800
theme.h3FontWeight = 700
theme.h4FontWeight = 700
theme.h5FontWeight = 700
theme.h6FontWeight = 700


// Component: Section


theme.sectionBackgroundColor = theme.white


// Base form field styles


theme.inputHeight = '2.25em'

theme.inputBorderWidth = theme.borderWidth

theme.inputPaddingY = `calc(0.375em - ${theme.inputBorderWidth})`
theme.inputPaddingX = `calc(0.625em - ${theme.inputBorderWidth})`
theme.inputPaddingXHasIcon = '2.25rem'

theme.inputLineHeight = 1.5

theme.inputBackgroundColor = theme.white
theme.inputBackgroundColorFocus = theme.inputBackgroundColor
theme.inputBackgroundColorDisabled = theme.grayLightest

theme.inputColor = theme.gray
theme.inputColorFocus = theme.inputColor
theme.inputColorPlaceholder = theme.grayLight

theme.inputBorderColor = fade(theme.black, 85)
theme.inputBorderColorFocus = fade(theme.black, 60)

theme.inputBoxShadow = `inset 0 1px 1px ${fade(theme.black, 92.5)}`
theme.inputBoxShadowFocus = `inset 0 1px 1px ${fade(theme.inputBorderColorFocus, 40)}`

theme.inputTransition = 'border-color ease-in-out 150ms, box-shadow ease-in-out 150ms'

// Size

theme.inputFontSizeNormal = theme.fontSizeNormal
theme.inputFontSizeSmall = theme.fontSizeSmall
theme.inputFontSizeLarge = theme.fontSizeLarge

theme.inputBorderRadiusNormal = theme.borderRadiusNormal
theme.inputBorderRadiusSmall = theme.borderRadiusSmall
theme.inputBorderRadiusLarge = theme.borderRadiusLarge


// Component: Select


theme.selectCaretColor = theme.inputColor
theme.selectCaretSize = '0.5em'


// Component: Checkable (Checkbox / Radio)


theme.checkableMargin = theme.inputPaddingY
theme.checkableInputGutter = '1.25em'
theme.checkableInputMarginY = '0.25em'
theme.checkableInputMarginX = '0.25em'


// Component: Label


theme.labelMarginBottom = '0.5rem'


// Component: Field


theme.fieldMarginBottom = '1rem'

theme.fieldHorizontalGap = '1.75rem'
theme.fieldGroupedGutter = '12px' // must be in pixels


// Components: FieldFeedback + FieldHelp


theme.fieldFeedbackMarginTop = '0.25rem'
theme.fieldFeedbackFontWeight = theme.fontWeightBold

theme.fieldHelpMarginTop = '0.25rem'
theme.fieldHelpFontSize = theme.fontSizeSmall
theme.fieldHelpColor = theme.grayLight


// Component: Button


theme.buttonPaddingY = theme.inputPaddingY
theme.buttonPaddingX = theme.inputPaddingX

theme.buttonFontWeight = theme.fontWeightNormal
theme.buttonFocusBoxShadow = `0 0 0 2px ${fade(theme.brandPrimary, 75)}`
theme.buttonActiveBoxShadow = 'inset 0 3px 5px rgba(0,0,0,0.125)'
theme.buttonTransition = 'all .2s ease-in-out'

theme.buttonLinkDisabledColor = theme.grayLight

theme.buttonBorderWidth = theme.inputBorderWidth

// Size

theme.buttonBorderRadiusNormal = theme.inputBorderRadiusNormal
theme.buttonBorderRadiusSmall = theme.inputBorderRadiusSmall
theme.buttonBorderRadiusLarge = theme.inputBorderRadiusLarge

theme.buttonFontSizeNormal = theme.fontSizeNormal
theme.buttonFontSizeSmall = theme.fontSizeSmall
theme.buttonFontSizeLarge = theme.fontSizeLarge

// Branding

theme.buttonDefaultColor = theme.grayDark
theme.buttonDefaultBackgroundColor = theme.white
theme.buttonDefaultBorderColor = theme.grayLighter
theme.buttonDefaultFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonDefaultBorderColor, 50)}`

theme.buttonPrimaryColor = theme.white
theme.buttonPrimaryBackgroundColor = theme.brandPrimary
theme.buttonPrimaryBorderColor = theme.buttonPrimaryBackgroundColor
theme.buttonPrimaryFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonPrimaryBorderColor, 50)}`

theme.buttonInfoColor = theme.white
theme.buttonInfoBackgroundColor = theme.brandInfo
theme.buttonInfoBorderColor = theme.buttonInfoBackgroundColor
theme.buttonInfoFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonInfoBorderColor, 50)}`

theme.buttonSuccessColor = theme.white
theme.buttonSuccessBackgroundColor = theme.brandSuccess
theme.buttonSuccessBorderColor = theme.buttonSuccessBackgroundColor
theme.buttonSuccessFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonSuccessBorderColor, 50)}`

theme.buttonWarningColor = theme.white
theme.buttonWarningBackgroundColor = theme.brandWarning
theme.buttonWarningBorderColor = theme.buttonWarningBackgroundColor
theme.buttonWarningFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonWarningBorderColor, 50)}`

theme.buttonDangerColor = theme.white
theme.buttonDangerBackgroundColor = theme.brandDanger
theme.buttonDangerBorderColor = theme.buttonDangerBackgroundColor
theme.buttonDangerFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonDangerBorderColor, 50)}`


// Component: Close


theme.closeColor = theme.black
theme.closeFontSize = '1.5rem'
theme.closeFontWeight = theme.fontWeightBold
theme.closeTextShadow = `0 1px 0 ${theme.white}`


// Component: Icon


// Load font, and use generated font family
theme.iconFontFamily = iconFontFace


// Component: Badge


theme.badgeHeight = '2em' // relative
theme.badgePaddingX = '0.875em' // relative
theme.badgeLineHeight = '1.5'
theme.badgeBorderRadius = theme.borderRadiusInfinite
theme.badgeFontFamily = theme.baseFontFamily
theme.badgeFontWeight = theme.fontWeightNormal

theme.badgefontSizeSmall = '0.75rem'
theme.badgeFontSizeNormal = '1rem'
theme.badgeFontSizeLarge = '1.25rem'


// Component: Alert


theme.alertBorderWidth = theme.borderWidth
theme.alertBorderRadius = theme.borderRadiusNormal
theme.alertPaddingY = '1rem'
theme.alertPaddingX = '1.25rem'
theme.alertPaddingXClose = '2.5rem'
theme.alertMarginBottom = '1rem'
theme.alertLineHeight = theme.baseLineHeight


// Component: Tile


theme.tileBorderRadius = theme.borderRadiusNormal // switch-able
theme.tileBoxShadow = '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)' // switch-able
theme.tilePaddingX = '1.25rem'
theme.tilePaddingY = '0.75rem'
theme.tileMarginBottom = '1rem'


// Component: Modal


theme.modalBackgroundColor = 'rgba(0, 0, 0, 0.86)'


// Component: Navbar


theme.navbarHeight = '3.25rem'

theme.navbarLinkColor = theme.grayLight
theme.navbarLinkColorHover = theme.gray
theme.navbarLinkTabColor = theme.grayLight
theme.navbarLinkTabColorHover = theme.brandPrimary


// Component: Tabs / Tab


theme.tabsOuterBorderColor = theme.borderColor

theme.tabsColor = theme.gray
theme.tabsHoverColor = theme.grayDark
theme.tabsActiveColor = theme.brandPrimary
theme.tabsActiveHoverColor = darken(theme.brandPrimary, 10)

theme.tabsBoxedAndButtonlikeBackgroundColorHover = theme.grayLighter
theme.tabsButtonlikeActiveTextColor = theme.white

theme.tabsBoxedBorderRadius = theme.borderRadiusNormal
theme.tabsButtonlikeBorderRadius = theme.borderRadiusNormal

// For buttonlike, if false, prevent hovered non-active tab at right
// of active tab from overlapping the active tab's border.
// You might consider setting this to true if your
// tabsOuterBorderColor is darker than your tabsBoxedAndButtonlikeBackgroundColorHover
theme.tabsButtonlikeHoveredShouldOverlapActiveLeft = false


// Component: Pagination


theme.paginationLinkColor = theme.buttonDefaultColor
theme.paginationLinkHoverColor = theme.buttonDefaultColor
theme.paginationLinkBorderColor = theme.buttonDefaultBorder
theme.paginationLinkHoverBorderColor = darken(theme.buttonDefaultBorder, 10)
theme.paginationLinkBackgroundColor = theme.buttonDefaultBackgroundColor
theme.paginationLinkHoverBackgroundColor = darken(theme.buttonDefaultBackgroundColor, 5)

theme.paginationLinkDisabledColor = theme.buttonDefaultColor
theme.paginationLinkDisabledHoverColor = theme.buttonDefaultColor
theme.paginationLinkDisabledBorderColor = theme.buttonDefaultBorder
theme.paginationLinkDisabledHoverBorderColor = theme.buttonDefaultBorder
theme.paginationLinkDisabledBackgroundColor = theme.buttonDefaultBackgroundColor
theme.paginationLinkDisabledHoverBackgroundColor = theme.buttonDefaultBackgroundColor
theme.paginationLinkDisabledOpacity = theme.disabledOpacity
theme.paginationLinkDisabledHoverOpacity = theme.disabledOpacity

theme.paginationLinkActiveColor = theme.white
theme.paginationLinkActiveHoverColor = theme.white
theme.paginationLinkActiveBorderColor = theme.brandPrimary
theme.paginationLinkActiveHoverBorderColor = darken(theme.brandPrimary, 10)
theme.paginationLinkActiveBackgroundColor = theme.paginationLinkActiveBorderColor
theme.paginationLinkActiveHoverBackgroundColor = theme.paginationLinkActiveHoverBorderColor


// Final export


export default theme
