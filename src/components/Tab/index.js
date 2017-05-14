import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'

import { styled, propTypeTabType } from '../../utils'

import { hover } from '../../mixins'

import A from '../A'


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


const Link = styled(A)(({ active, isFirst, isLast, type }, t) =>
  merge(
    // base styles (all types)
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: t.transparent,

      color: t.tabsColor,

      marginBottom: '-1px',
      paddingTop: '0.5em',
      paddingRight: '1em',
      paddingBottom: '0.5em',
      paddingLeft: '1em',

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
    type === 'boxed' && {
      // TODO
    },
    // type buttonlike
    type === 'buttonlike' && {
      // TODO
    },
  ))

Link.propTypes = {
  active: PropTypes.bool,

  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,

  type: PropTypes.oneOf(['normal', 'boxed', 'buttonlike']).isRequired,

  children: PropTypes.node,
}


const Tab = ({ active, isFirst, isLast, type, grow, children, ...restProps }) =>
  <Wrapper isButtonlike={type === 'buttonlike'} isFirst={isFirst} grow={grow}>
    <Link active={active} isFirst={isFirst} isLast={isLast} type={type} {...restProps}>
      {children}
    </Link>
  </Wrapper>

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
