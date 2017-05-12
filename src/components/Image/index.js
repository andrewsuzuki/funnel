import React from 'react'
import PropTypes from 'prop-types'


export default function Image({ alt, ...restProps }) {
  return <img {...restProps} alt={alt} />
}


Image.propTypes = {
  alt: PropTypes.string.isRequired, // has default
}

Image.defaultProps = {
  alt: '',
}
