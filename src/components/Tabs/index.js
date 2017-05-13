import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import { styled, propTypeSize } from '../../utils'

import Tab from '../Tab'


const Wrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-between',

  userSelect: 'none',

  fontSize: '1rem',

  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
}))


const Tabs = ({ type, position, size, fullWidth, children }) => {
  const tabs = React.Children.map(children, (tab) => {
    invariant(
      tab.type === Tab,
      'Every child of Tabs must be a Tab',
    )

    return React.cloneElement(tab, { type, position, size, fullWidth })
  })

  return (
    <Wrapper>
      {tabs}
    </Wrapper>
  )
}

Tabs.propTypes = {
  type: PropTypes.oneOf(['normal', 'boxed', 'buttonlike']).isRequired, // has default
  position: PropTypes.oneOf(['left', 'center', 'right']).isRequired, // has default
  size: propTypeSize.isRequired, // has default
  fullWidth: PropTypes.bool.isRequired, // has default

  children: PropTypes.node,
}

Tabs.defaultProps = {
  type: 'normal',
  position: 'left',
  size: 'normal',
  fullWidth: false,
}

export default Tabs
