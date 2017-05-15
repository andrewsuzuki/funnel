import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'

import { styled, propTypeTabType, propTypeHorizontalPosition } from '../../utils'

import { hover, padding, borderWidth, borderStyle, borderColor } from '../../mixins'

import A from '../A'
import Icon from '../Icon'


const Wrapper = styled.li(({ isButtonlike, grow, isFirst }) => ({
  display: 'block',

  // isButtonlike and NOT isFirst
  ...isButtonlike && !isFirst && {
    marginLeft: '-1px',
  },

  // grow (fullWidth on Tabs)
  ...grow && {
    flexGrow: 1,
    flexShrink: 0,
  },
}))

Wrapper.propTypes = {
  isButtonlike: PropTypes.bool,
  isFirst: PropTypes.bool,
  grow: PropTypes.bool,

  children: PropTypes.node,
}


const Link = styled(A)(({ active, isFirst, isLast, tabType }, t) =>
  merge(
    // base styles (all types)
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'transparent',

      color: t.tabsColor,

      marginBottom: '-1px',
      ...padding('0.5em', '1em'),

      verticalAlign: 'top',

      ...active && {
        borderBottomColor: t.tabsActiveColor,
        color: t.tabsActiveColor,
      },

      ...hover({
        textDecoration: 'none',

        // not active
        ...!active && {
          borderBottomColor: t.tabsHoverColor,
          color: t.tabsHoverColor,
        },

        // active
        ...active && {
          borderBottomColor: t.tabsActiveHoverColor,
          color: t.tabsActiveHoverColor,
        },
      }),
    },
    // type boxed
    tabType === 'boxed' && {
      ...borderWidth('1px'),
      ...borderStyle('solid'),
      ...borderColor('transparent'),

      // round off upper corners to make it look like a manila folder tab
      ...t.enableRounded && {
        borderTopLeftRadius: t.tabsBoxedBorderRadius,
        borderTopRightRadius: t.tabsBoxedBorderRadius,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      },

      ...hover({
        borderBottomColor: 'transparent',

        ...!active && {
          backgroundColor: t.tabsBoxedAndButtonlikeBackgroundColorHover,
        },
      }),

      ...active && {
        backgroundColor: t.white,
        ...borderColor(t.tabsOuterBorderColor, t.tabsOuterBorderColor, 'transparent'),
      },
    },
    // type buttonlike
    tabType === 'buttonlike' && {
      ...borderWidth('1px'),
      ...borderStyle('solid'),
      ...borderColor(t.tabsOuterBorderColor),

      marginBottom: 0,
      position: 'relative',

      zIndex: 1,

      // round off outer sides of first and last tab-buttons
      ...t.enableRounded && {
        ...isFirst && {
          borderTopLeftRadius: t.tabsButtonlikeBorderRadius,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: t.tabsButtonlikeBorderRadius,
        },

        ...isLast && {
          borderTopLeftRadius: 0,
          borderTopRightRadius: t.tabsButtonlikeBorderRadius,
          borderBottomRightRadius: t.tabsButtonlikeBorderRadius,
          borderBottomLeftRadius: 0,
        },
      },

      ...active && {
        ...borderColor(t.tabsActiveColor),

        backgroundColor: t.tabsActiveColor,
        color: t.tabsButtonlikeActiveTextColor,

        // prevent hovered non-active tab at right (z-index 2) from going over
        // (unless t.tabsHoveredShouldOverlapActiveLeft is true)
        ...!t.tabsButtonlikeHoveredShouldOverlapActiveLeft && { zIndex: 3 },
      },

      ...hover({
        // not active
        ...!active && {
          ...borderColor(t.tabsOuterBorderColor),

          backgroundColor: t.tabsBoxedAndButtonlikeBackgroundColorHover,
        },

        // active
        ...active && {
          ...borderColor(t.tabsActiveHoverColor),

          backgroundColor: t.tabsActiveHoverColor,
          color: t.tabsButtonlikeActiveTextColor,
        },

        // use this border-left over the left sibling tab's border-right (unless active)
        zIndex: 2,
      }),
    },
  ))

Link.propTypes = {
  active: PropTypes.bool,

  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,

  tabType: PropTypes.oneOf(['normal', 'boxed', 'buttonlike']).isRequired,

  children: PropTypes.node,
}


const TabIcon = styled(Icon)(({ position }) => ({
  ...(position === 'center' || position === 'left') && { marginRight: '0.5em' },
  ...(position === 'center' || position === 'right') && { marginLeft: '0.5em' },
}))

TabIcon.propTypes = {
  position: propTypeHorizontalPosition,
  // ... other Icon props
}


const Tab = ({ active, isFirst, isLast, type, grow, children, ...restProps }) => {
  const childrenCount = React.Children.count(children)

  // Map children, unless there's only one, in which case it doesn't
  // need any margin even if it is an Icon
  const newChildren = childrenCount === 1 ? children : React.Children.map(children, (child, i) => {
    if (child.type === Icon) {
      const position = (i === 0 && 'left') || (i === (childrenCount - 1) && 'right') || 'center'
      // Steal icon props and use it on our specialized TabIcon
      // Since props are spread after position, it can be overridden
      // (i.e. with position=null for no margin)
      return React.createElement(TabIcon, { position, ...child.props })
    }

    return child
  })

  return (
    <Wrapper isButtonlike={type === 'buttonlike'} isFirst={isFirst} grow={grow}>
      <Link active={active} isFirst={isFirst} isLast={isLast} tabType={type} {...restProps}>
        {newChildren}
      </Link>
    </Wrapper>
  )
}

Tab.propTypes = {
  active: PropTypes.bool, // has default

  isFirst: PropTypes.bool, // has default
  isLast: PropTypes.bool, // has default

  type: propTypeTabType.isRequired, // has default
  grow: PropTypes.bool.isRequired, // has default (===fullWidth on Tabs)

  children: PropTypes.node,
}

Tab.defaultProps = {
  active: false,

  // NOTE
  // the below default props are only used for the initial render.
  // overridden by the same props on Tabs via cloneElement

  isFirst: false,
  isLast: false,

  type: 'normal',
  grow: false,
}

export default Tab
