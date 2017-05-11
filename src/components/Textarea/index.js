import PropTypes from 'prop-types'

import {
  styled,
  propTypeBrand,
  propTypeSize,
  propTypeFieldMeta,
  connectField,
} from '../../utils'

import { makeInputStyles } from '../../mixins'


const Textarea = styled.textarea((props, t) => ({
  ...makeInputStyles(props, t),
  height: 'auto',
}))

Textarea.propTypes = {
  brand: propTypeBrand,
  size: propTypeSize,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,

  fieldMeta: propTypeFieldMeta,
}


export default connectField(Textarea, 'id', false)
