import PropTypes from 'prop-types'

import canConnectField from '../Field/canConnectField'

import {
  styled,
  propTypeInputType,
  propTypeFieldMeta,
  propTypeBrand,
  propTypeSize,
} from '../../utils'

import { makeInputStyles } from '../../mixins'


const Input = styled('input', makeInputStyles)

Input.propTypes = {
  type: propTypeInputType.isRequired, // has default

  fieldMeta: propTypeFieldMeta,

  brand: propTypeBrand,
  size: propTypeSize,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,

  hasIconLeft: PropTypes.bool,
  hasIconRight: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
}


export default canConnectField(Input, 'id', false)
