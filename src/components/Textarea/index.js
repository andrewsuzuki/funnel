import PropTypes from 'prop-types'

import canConnectField from '../Field/canConnectField'

import {
  styled,
  propTypeBrand,
  propTypeSize,
  propTypeFieldMeta,
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


export default canConnectField(Textarea, 'id', false)
