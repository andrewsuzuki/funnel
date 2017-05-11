import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'glamorous'

import { propTypeBackgroundContext } from './propTypes'

import { isLight } from './color'

import { getDisplayName } from './helpers'


class BackgroundContextInner extends React.PureComponent {
  getChildContext() {
    const {
      theme,
      backgroundColor,
      textColor: textColorGiven,
      linkColor: linkColorGiven,
    } = this.props

    const backgroundColorIsLight = isLight(backgroundColor)

    const textColorAuto = backgroundColorIsLight ? theme.baseTextColor : theme.white

    const linkColor = linkColorGiven || null

    const background = {
      backgroundColor,
      backgroundColorIsLight,
      linkColor,
      textColorAuto,
      textColorGiven,
      textColor: textColorGiven || textColorAuto,
    }

    return {
      background,
    }
  }

  render() {
    const { children } = this.props

    return children ? React.Children.only(children) : null
  }
}

BackgroundContextInner.propTypes = {
  theme: PropTypes.object,

  children: PropTypes.node,

  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  linkColor: PropTypes.string,
}

BackgroundContextInner.childContextTypes = {
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
