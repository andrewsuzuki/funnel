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

import { styled } from '../../utils'

import AtBottom from '../AtBottom'


const Wrapper = styled.div(({ minHeight, absoluteCover }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...minHeight ? { minHeight } : {
    ...!absoluteCover && { minHeight: '100vh' },
    ...absoluteCover && { position: 'absolute', height: '100%', width: '100%' },
  },
}))

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
  minHeight: PropTypes.string, // customize the minHeight (takes precedence over absoluteCover)
  absoluteCover: PropTypes.bool, // h/w: 100%, postition: absolute (instead of minHeight: 100vh)
  children: PropTypes.node,
}

export default Stickler
