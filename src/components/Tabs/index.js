import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import {
  styled,
  propTypeSize,
  propTypeHorizontalPosition,
  propTypeTabType,
} from '../../utils'

import Tab from '../Tab'


const Wrapper = styled.div(() => ({
  userSelect: 'none',

  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
}))


const sizeToThemeFontSizeMap = {
  normal: 'fontSizeNormal',
  small: 'fontSizeSmall',
  large: 'fontSizeLarge',
}

const List = styled.ul(({ isButtonlike, position, size }, t) => ({
  display: 'flex',
  alignItems: 'center',

  margin: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,

  // Positioning
  ...position === 'left' && {
    justifyContent: 'flex-start',
    paddingRight: '0.75em',
  },
  ...position === 'center' && {
    justifyContent: 'center',
    paddingLeft: '0.75em',
    paddingRight: '0.75em',
    flex: 'none', // ?
  },
  ...position === 'right' && {
    justifyContent: 'flex-end',
    paddingLeft: '0.75em',
  },

  // Size
  fontSize: t[sizeToThemeFontSizeMap[size]],

  // Border-bottom (if not buttonlike)
  ...!isButtonlike && {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: t.tabsBorderBottomColor,
  },
}))

List.propTypes = {
  isButtonlike: PropTypes.bool.isRequired,
  position: propTypeHorizontalPosition.isRequired,
  size: propTypeSize.isRequired,
}


const Tabs = ({ type, position, size, fullWidth, children }) => {
  const tabsCount = React.Children.toArray(children).length

  if (tabsCount === 0) {
    return null
  }

  const tabs = React.Children.map(children, (tab, i) => {
    invariant(
      tab.type === Tab,
      'Every child of Tabs must be a Tab',
    )

    return React.cloneElement(tab, {
      // unique
      isFirst: i === 0,
      isLast: i === (tabsCount - 1),

      // passed down
      type,
      grow: fullWidth,
    })
  })

  return (
    <Wrapper>
      <List isButtonlike={type === 'buttonlike'} position={position} size={size}>
        {tabs}
      </List>
    </Wrapper>
  )
}

Tabs.propTypes = {
  type: propTypeTabType.isRequired, // has default
  position: propTypeHorizontalPosition.isRequired, // has default
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
