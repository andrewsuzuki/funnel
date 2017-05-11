import PropTypes from 'prop-types'

import {
  styled,
  propTypeInputType,
  propTypeFieldMeta,
  propTypeBrand,
  propTypeSize,
  connectField,
} from '../../utils'

import { makeInputStyles } from '../../mixins'


const Input = styled.input((p, t) => makeInputStyles(p, t))

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


export default connectField(Input, 'id', false)
