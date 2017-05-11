import React from 'react'
import PropTypes from 'prop-types'

import { propTypeBackgroundContext } from './propTypes'

import { isLight } from './color'

import { getDisplayName } from './helpers'


export class BackgroundContext extends React.PureComponent {
  getChildContext() {
    const { backgroundColor, textColor: textColorGiven } = this.props

    const backgroundColorIsLight = isLight(backgroundColor)

    // TODO hook into theme
    const textColorAuto = backgroundColorIsLight ? 'black' : 'white'

    const background = {
      backgroundColor,
      backgroundColorIsLight,
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

BackgroundContext.propTypes = {
  children: PropTypes.node,

  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
}

BackgroundContext.childContextTypes = {
  background: propTypeBackgroundContext,
}


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
