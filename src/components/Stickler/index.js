/**
 * Stickler
 *
 * Positions child AtBottom as a sticky footer.
 *
 * Defn. stickler
 * 1. a person who insists on a certain quality or type of behavior. (true!)
 * 2. a difficult problem; a conundrum. (used to be true before flexbox!)
 */

import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'
import { withTheme } from 'glamorous'

import { styled, propTypeBreakpoint } from '../../utils'
import { breakpoint, breakpointMax, breakpointOnly } from '../../mixins'

import AtBottom from '../AtBottom'


const breakpointTypeLookup = {
  only: breakpointOnly,
  above: breakpoint,
  below: breakpointMax,
}

const handleCustomMinHeight = (theme, minHeight) => {
  if (typeof minHeight === 'string') {
    return { minHeight }
  }

  // minHeight is now an list of objects specifying minHeight values at different breakpoints

  return Object.assign({}, ...minHeight.map(({ breakpoint: bkpt, type, value }) =>
    breakpointTypeLookup[type](theme, bkpt, { minHeight: value })))
}


const Wrapper = withTheme(styled.div(({ theme, minHeight, absoluteCover }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...minHeight ? handleCustomMinHeight(theme, minHeight) : {
    ...!absoluteCover && { minHeight: '100vh' },
    ...absoluteCover && { position: 'absolute', height: '100%', width: '100%' },
  },
})))

const SticklerTop = styled.div({
  flex: 1,
})

const SticklerBottom = styled.div()


const Stickler = ({ minHeight, absoluteCover, children }) => {
  const { bottom, rest } = React.Children.toArray(children).reduce(({ bottom, rest }, child) => {
    if (child.type === AtBottom) {
      invariant(
        !bottom,
        'Stickler must have at most one AtBottom',
      )

      return { bottom: child.props.children, rest }
    }

    return { bottom, rest: [...rest, child] }
  }, { bottom: null, rest: [] })

  return (
    <Wrapper minHeight={minHeight} absoluteCover={absoluteCover}>
      <SticklerTop>{rest}</SticklerTop>
      {bottom && <SticklerBottom>{bottom}</SticklerBottom>}
    </Wrapper>
  )
}

Stickler.propTypes = {
  // customize the minHeight (takes precedence over absoluteCover)
  minHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      breakpoint: propTypeBreakpoint.isRequired,
      type: PropTypes.oneOf(['only', 'above', 'below']).isRequired,
      value: PropTypes.string.isRequired,
    })),
  ]),
  absoluteCover: PropTypes.bool, // h/w: 100%, postition: absolute (instead of minHeight: 100vh)
  children: PropTypes.node,
}

export default Stickler
