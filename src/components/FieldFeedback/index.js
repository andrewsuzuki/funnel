import memoize from 'lodash.memoize'

import { styled, capitalize, propTypeBrand } from '../../utils'


const brandToThemeColor = memoize((brand) => `brand${capitalize(brand)}`)


const FieldFeedback = styled.div(({ brand }, t) => ({
  marginTop: t.fieldFeedbackMarginTop,
  fontWeight: t.fieldFeedbackFontWeight,
  color: t[brandToThemeColor(brand)],
}))

FieldFeedback.propTypes = {
  brand: propTypeBrand.isRequired,
}

export default FieldFeedback
