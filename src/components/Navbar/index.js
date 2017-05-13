/**
 * Navbar
 */


import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import {
  styled,
} from '../../utils'

import AtLeft from '../AtLeft'
import AtRight from '../AtRight'
import AtCenter from '../AtCenter'


const LeftOrRight = styled.div({
  // TODO
})


const Center = styled.div({
  // TODO
})


export default function Navbar({ children }) {
  const { left, center, right } = React.Children.toArray(children).reduce((acc, child) => {
    if (child.type === AtLeft) {
      invariant(
        !acc.left,
        'Stickler must have at most one AtLeft',
      )

      return { ...acc, left: child.props.children }
    } else if (child.type === AtRight) {
      invariant(
        !acc.right,
        'Stickler must have at most one AtRight',
      )

      return { ...acc, right: child.props.children }
    } else if (child.type === AtCenter) {
      invariant(
        !acc.center,
        'Stickler must have at most one AtCenter',
      )

      return { ...acc, center: child.props.children }
    }

    invariant(
      false,
      'Navbar children must be of types AtLeft, AtRight, or AtCenter',
    )

    // not reachable
    return acc
  }, { left: null, right: null, center: null })

  return (
    <div>
      {left && <LeftOrRight>{left}</LeftOrRight>}
      {center && <Center>{center}</Center>}
      {right && <LeftOrRight>{right}</LeftOrRight>}
    </div>
  )
}

Navbar.propTypes = {
  children: PropTypes.node,
}

Navbar.defaultProps = {
}
