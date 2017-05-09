/**
 * Level
 *
 * Allowed children: AtCenter, AtLeft, AtRight
 */


import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import { styled, propTypeBreakpoint, propTypeAlignItems } from '../../utils'

import { breakpoint } from '../../mixins'

import AtCenter from '../AtCenter'
import AtLeft from '../AtLeft'
import AtRight from '../AtRight'


const LevelWrapper = styled.div(({ breakpoint: bkpt, alignItems }, t) => ({
  ...breakpoint(t, bkpt, {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems,
  }),
}))

LevelWrapper.propTypes = {
  breakpoint: propTypeBreakpoint.isRequired,
  alignItems: propTypeAlignItems.isRequired,
}


// Vertical spacer under breakpoint, horizontal spacer at/above breakpoint
const LevelSpacer = styled.div(({ breakpoint: bkpt }, t) => ({
  flexGrow: 0,
  flexShrink: 0,
  height: '1.5rem',
  width: '1px',

  ...breakpoint(t, bkpt, {
    height: '1px',
    width: '1.5rem',
  }),
}))

LevelSpacer.propTypes = {
  breakpoint: propTypeBreakpoint.isRequired,
}


const LevelCenter = styled.div(({ breakpoint: bkpt }, t) => ({
  // 'fBasis/auto',
  // 'fGrow/0',
  // 'fShrink/0',

  ...breakpoint(t, bkpt, { display: 'flex' }),

  alignItems: 'center',

  // overriden by extending components
  justifyContent: 'center',
}))

LevelCenter.propTypes = {
  breakpoint: propTypeBreakpoint.isRequired,
}


const LevelLeft = styled(LevelCenter)({
  justifyContent: 'flex-start',
})


const LevelRight = styled(LevelCenter)({
  justifyContent: 'flex-end',
})


const validChildPositions = [AtCenter, AtLeft, AtRight]


const positionReplacements = [LevelCenter, LevelLeft, LevelRight]


export default function Level({ breakpoint, alignItems, children, ...restProps }) {
  // Replace AtCenter/AtLeft/AtRight with Level-specific "implementations"
  const childrenReplaced = React.Children.map(children, (child) => {
    const positionIndex = validChildPositions.indexOf(child.type)

    // Verify children are AtCenter/AtLeft/AtRight
    invariant(
      positionIndex > -1,
      `Level children must be of types {${validChildPositions.map((p) => p.name).join(',')}}`,
    )

    return React.createElement(
      positionReplacements[positionIndex],
      { breakpoint, ...child.props },
    )
  })

  // Intersperse LevelSpacer in children
  const childrenFinal = []
  .concat(
    ...React.Children.toArray(childrenReplaced)
      .map((e, i) =>
        ([<LevelSpacer key={`spacer${i}`} breakpoint={breakpoint} />, e])),
    )
  .slice(1)

  return React.createElement(
    LevelWrapper,
    { breakpoint, alignItems, ...restProps },
    childrenFinal,
  )
}

Level.propTypes = {
  breakpoint: propTypeBreakpoint.isRequired, // has default
  alignItems: propTypeAlignItems.isRequired, // has default

  children: PropTypes.node,
}

Level.defaultProps = {
  breakpoint: 'tablet',
  alignItems: 'center',
}
