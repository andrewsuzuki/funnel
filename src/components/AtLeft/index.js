/**
 * AtLeft
 * Helper component that assists positioning in parents that expect it
 */

import React from 'react'
import PropTypes from 'prop-types'


export default function AtLeft({ children, ...restProps }) {
  return React.createElement('div', restProps, children)
}

AtLeft.propTypes = {
  children: PropTypes.node,
}
