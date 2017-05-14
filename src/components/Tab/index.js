import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'

import { styled, propTypeTabType, propTypeHorizontalPosition } from '../../utils'

import { hover, padding } from '../../mixins'

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
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'transparent',
      borderRightWidth: '1px',
      borderRightStyle: 'solid',
      borderRightColor: 'transparent',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'transparent',
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
      borderLeftColor: 'transparent',

      borderTopLeftRadius: t.tabsBoxedBorderRadius,
      borderTopRightRadius: t.tabsBoxedBorderRadius,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,

      ...hover({
        borderBottomColor: 'transparent',

        ...!active && {
          backgroundColor: t.tabsBoxedAndButtonlikeBackgroundColorHover,
        },
      }),

      ...active && {
        backgroundColor: t.white,
        borderTopColor: t.tabsOuterBorderColor,
        borderRightColor: t.tabsOuterBorderColor,
        borderBottomColor: 'transparent',
        borderLeftColor: t.tabsOuterBorderColor,
      },
    },
    // type buttonlike
    tabType === 'buttonlike' && {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: t.tabsOuterBorderColor,
      borderRightWidth: '1px',
      borderRightStyle: 'solid',
      borderRightColor: t.tabsOuterBorderColor,
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: t.tabsOuterBorderColor,
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid',
      borderLeftColor: t.tabsOuterBorderColor,

      marginBottom: 0,
      position: 'relative',

      zIndex: 1,

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

      ...active && {
        borderTopColor: t.tabsActiveColor,
        borderRightColor: t.tabsActiveColor,
        borderBottomColor: t.tabsActiveColor,
        borderLeftColor: t.tabsActiveColor,

        backgroundColor: t.tabsActiveColor,
        color: t.tabsButtonlikeActiveTextColor,

        // prevent hovered non-active tab at right (z-index 2) from going over
        // (unless t.tabsHoveredShouldOverlapActiveLeft is true)
        ...!t.tabsButtonlikeHoveredShouldOverlapActiveLeft && { zIndex: 3 },
      },

      ...hover({
        // not active
        ...!active && {
          borderTopColor: t.tabsOuterBorderColor,
          borderRightColor: t.tabsOuterBorderColor,
          borderBottomColor: t.tabsOuterBorderColor,
          borderLeftColor: t.tabsOuterBorderColor,

          backgroundColor: t.tabsBoxedAndButtonlikeBackgroundColorHover,
        },

        // active
        ...active && {
          borderTopColor: t.tabsActiveHoverColor,
          borderRightColor: t.tabsActiveHoverColor,
          borderBottomColor: t.tabsActiveHoverColor,
          borderLeftColor: t.tabsActiveHoverColor,

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
