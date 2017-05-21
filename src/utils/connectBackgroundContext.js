import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'glamorous'

import { propTypeBackgroundContext } from './propTypes'

// import { isLight } from './color'

import { getDisplayName } from './helpers'


class BackgroundContextInner extends React.PureComponent {
  getChildContext() {
    const {
      preferInheritBackground,
      mustInheritBackground,

      // theme,

      backgroundColor,
      textColor,
      linkColor,
      linkHoverColor,
      linkActiveColor,
    } = this.props

    const { background: parentBackground } = this.context

    // If we *must* inherit parent background, then return it.
    // Otherwise, return nothing at all
    if (mustInheritBackground) {
      return !parentBackground ? {} : { background: parentBackground }
    }

    // If we *prefer* to inherit any parent background context and it is available,
    // then just return it as-is
    if (preferInheritBackground && parentBackground) {
      return { background: parentBackground }
    }

    // NOTE make sure changes to schema are also made
    // to the background context prop type
    const background = {
      backgroundColor,
      textColor,
      linkColor,
      linkHoverColor,
      linkActiveColor,
    }

    return {
      background,
    }
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
