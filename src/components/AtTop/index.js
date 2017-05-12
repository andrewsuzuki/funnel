/**
 * AtTop
 * Helper component that assists positioning in parents that expect it
 */

import React from 'react'
import PropTypes from 'prop-types'


export default function AtTop({ children, ...restProps }) {
  return React.createElement('div', restProps, children)
}

AtTop.propTypes = {
  children: PropTypes.node,
}
