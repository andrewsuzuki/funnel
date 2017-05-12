/**
 * AtCenter
 * Helper component that assists positioning in parents that expect it
 */

import React from 'react'
import PropTypes from 'prop-types'


export default function AtCenter({ children, ...restProps }) {
  return React.createElement('div', restProps, children)
}

AtCenter.propTypes = {
  children: PropTypes.node,
}
