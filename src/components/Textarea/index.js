import PropTypes from 'prop-types'

import canConnectField from '../Field/canConnectField'

import {
  styled,
  expandStyles,
  propIsBrand,
  propIsSize,
  propTypeFieldMeta,
} from '../../utils'

import { makeInputStyles } from '../../mixins'


const Textarea = styled('textarea', (props) => expandStyles(
  makeInputStyles(props),
  'h/auto',
))

Textarea.propTypes = {
  brand: propIsBrand,
  size: propIsSize,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,

  fieldMeta: propTypeFieldMeta,
}


export default canConnectField(Textarea, 'id', false)
