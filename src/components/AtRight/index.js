/**
 * AtRight
 * Helper component that assists positioning in parents that expect it
 */

import React from 'react'
import PropTypes from 'prop-types'


export default function AtRight({ children, ...restProps }) {
  return React.createElement('div', restProps, children)
}

AtRight.propTypes = {
  children: PropTypes.node,
}
