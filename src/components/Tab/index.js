import React from 'react'
import PropTypes from 'prop-types'

import { styled, propTypeSize } from '../../utils'


const Wrapper = styled.div(() => ({
}))


const Tab = ({ active, children }) =>
  <Wrapper active={active}>
    {children}
  </Wrapper>

Tab.propTypes = {
  type: PropTypes.oneOf(['normal', 'boxed', 'buttonlike']).isRequired,
  position: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
  size: propTypeSize.isRequired,
  fullWidth: PropTypes.bool.isRequired,

  active: PropTypes.bool,
  children: PropTypes.node,
}

Tab.defaultProps = {
  type: 'normal',
  position: 'left',
  size: 'normal',
  fullWidth: false,
}

export default Tab
