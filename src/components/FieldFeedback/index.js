import memoize from 'lodash.memoize'

import { styled, expandStyles, capitalize, propIsBrand } from '../../utils'


const brandToThemeColor = memoize((brand) => `brand${capitalize(brand)}`)


const FieldFeedback = styled('div', ({ brand }) => expandStyles(
  'mTop/~fieldFeedbackMarginTop',

  'fw/~fieldFeedbackFontWeight',
  `c/~${brandToThemeColor(brand)}`,
))

FieldFeedback.propTypes = {
  brand: propIsBrand.isRequired,
}

export default FieldFeedback
