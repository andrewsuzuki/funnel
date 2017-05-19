import React from 'react'
import invariant from 'invariant'

import AtLeft from '../AtLeft'
import AtRight from '../AtRight'
import AtCenter from '../AtCenter'


/**
 * Ensure only positional children (left, right, center) and separate them
 */
const partMapper = (children) =>
  React.Children.toArray(children).reduce((acc, child) => {
    if (child.type === AtLeft) {
      invariant(
        !acc.left,
        'Navbar must have at most one AtLeft',
      )

      return { ...acc, left: child.props.children }
    } else if (child.type === AtRight) {
      invariant(
        !acc.right,
        'Navbar must have at most one AtRight',
      )

      return { ...acc, right: child.props.children }
    } else if (child.type === AtCenter) {
      invariant(
        !acc.center,
        'Navbar must have at most one AtCenter',
      )

      return { ...acc, center: child.props.children }
    }

    invariant(
      false,
      'Navbar children must be of types AtLeft, AtRight, or AtCenter',
    )

    // not reachable do to forced invariant above
    return acc
  }, { left: null, right: null, center: null })

export default partMapper
