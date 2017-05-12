/**
 * AtBottom
 * Helper component that assists positioning in parents that expect it
 */

import React from 'react'
import PropTypes from 'prop-types'


export default function AtBottom({ children, ...restProps }) {
  return React.createElement('div', restProps, children)
}

AtBottom.propTypes = {
  children: PropTypes.node,
}
