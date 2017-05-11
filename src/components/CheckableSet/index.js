import React from 'react'
import PropTypes from 'prop-types'

import { propTypeCheckableType, connectField } from '../../utils'

import Checkable from '../Checkable'


function CheckableSet({ name, type, disabled, items }) {
  return React.createElement('div', null, items.map((item, key) =>
    React.createElement(Checkable, { key, name, type, disabled, ...item })))
}


CheckableSet.propTypes = {
  name: PropTypes.string,
  type: propTypeCheckableType.isRequired,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object), // a bit naive
}


export default connectField(CheckableSet, 'name', true)
