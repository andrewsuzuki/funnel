import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'glamorous'
import get from 'lodash.get'

import { propTypeBackgroundContext } from './propTypes'

// import { isLight } from './color'

import { getDisplayName } from './helpers'


class BackgroundContextInner extends React.PureComponent {
  getChildContext() {
    const { preferInheritBackground, mustInheritBackground } = this.props

    const { background: parentBackground } = this.context

    // If we *must* inherit parent background, but it isn't available,
    // then don't supply any context at all.
    if (mustInheritBackground && !parentBackground) {
      return {}
    }

    const am = (k) => {
      const directValue = this.props[k]

      if (directValue) {
        return directValue
      }

      const parentValue = (mustInheritBackground || preferInheritBackground)
        && get(parentBackground, k)

      if (parentValue) {
        return parentValue
      }

      return null
    }

    const background = [
      'backgroundColor',
      'textColor',
      'linkColor',
      'linkHoverColor',
      'linkActiveColor',
    ].reduce((acc, k) => ({ ...acc, [k]: am(k) }), {})

    return { background }
  }

  render() {
    const { children } = this.props

    // If there is a child, make sure it is an only child. Otherwise, null
    return children ? React.Children.only(children) : null
  }
}

BackgroundContextInner.propTypes = {
  preferInheritBackground: PropTypes.bool,
  mustInheritBackground: PropTypes.bool,

  theme: PropTypes.object,

  children: PropTypes.node,

  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  linkColor: PropTypes.string,
  linkHoverColor: PropTypes.string,
  linkActiveColor: PropTypes.string,
}

BackgroundContextInner.childContextTypes = {
  background: propTypeBackgroundContext,
}

BackgroundContextInner.contextTypes = {
  background: propTypeBackgroundContext,
}

export const BackgroundContext = withTheme(BackgroundContextInner)


export function connectBackgroundContext(component) {
  const ConnectedBackgroundContext = ({ noBackgroundContext, ...restProps }, context) =>
    React.createElement(component, {
      ...!noBackgroundContext && context.background && { backgroundContext: context.background },
      ...restProps,
    })

  ConnectedBackgroundContext.propTypes = {
    noBackgroundContext: PropTypes.bool,
  }

  ConnectedBackgroundContext.contextTypes = {
    background: propTypeBackgroundContext,
  }

  ConnectedBackgroundContext.displayName = `connectBackgroundContext(${getDisplayName(component)})`

  return ConnectedBackgroundContext
}
