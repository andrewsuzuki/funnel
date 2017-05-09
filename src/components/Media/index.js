/**
 * Media
 *
 * Allowed children: AtCenter, AtLeft, AtRight
 */


import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import { styled } from '../../utils'

import AtCenter from '../AtCenter'
import AtLeft from '../AtLeft'
import AtRight from '../AtRight'


const MediaWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})


const MediaSpacer = styled.div({
  flexGrow: 0,
  flexShrink: 0,
  height: '1px',
  width: '1.5rem',
})


const MediaCenter = styled.div({
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
})


const MediaLeft = styled.div({
  flexBasis: 'auto',
  flexGrow: 0,
  flexShrink: 0,
})


const MediaRight = styled(MediaLeft)


const validChildPositions = [AtCenter, AtLeft, AtRight]


const positionReplacements = [MediaCenter, MediaLeft, MediaRight]


export default function Media({ children, ...restProps }) {
  // Replace AtCenter/AtLeft/AtRight with Media-specific "implementations"
  const childrenReplaced = React.Children.map(children, (child) => {
    const positionIndex = validChildPositions.indexOf(child.type)

    // Verify children are AtCenter/AtLeft/AtRight
    invariant(
      positionIndex > -1,
      `Media children must be of types {${validChildPositions.map((p) => p.name).join(',')}}`,
    )

    return React.createElement(
      positionReplacements[positionIndex],
      child.props,
    )
  })

  // Intersperse MediaSpacer in children
  const childrenFinal = []
  .concat(
    ...React.Children.toArray(childrenReplaced)
      .map((e, i) =>
        ([<MediaSpacer key={`spacer${i}`} />, e])),
    )
  .slice(1)

  return React.createElement(
    MediaWrapper,
    restProps,
    childrenFinal,
  )
}

Media.propTypes = {
  children: PropTypes.node,
}
