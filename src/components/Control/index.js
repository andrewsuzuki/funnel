import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'
import get from 'lodash.get'

import { styled } from '../../utils'

import AtLeft from '../AtLeft'
import AtRight from '../AtRight'

import Select from '../Select'

import Icon from '../Icon'
import ControlSpinner from '../ControlSpinner'


const ControlWrapper = styled.div(({ inlineBlock }) => ({
  position: 'relative',

  ...inlineBlock && {
    display: 'inline-block',
  },
}))

ControlWrapper.propTypes = {
  inlineBlock: PropTypes.bool,
}


const ControlLeft = styled.div((p, t) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
  width: t.inputPaddingXHasIcon,

  position: 'absolute',
  top: 0,

  // overridden by ControlRight
  left: 0,
  right: 'auto',
}))

const ControlRight = styled(ControlLeft)({
  left: 'auto',
  right: 0,
})


const validChildPositions = [AtLeft, AtRight]


const positionReplacements = [ControlLeft, ControlRight]


export default function Control({ loading, expanded, children, ...restProps }) {
  const parts = React.Children.toArray(children).reduce((acc, child) => {
    const positionIndex = validChildPositions.indexOf(child.type)

    if (positionIndex > -1) {
      // This is a position, so replace the component with ours,
      // maintaining props

      const positionChildrenArray = React.Children.toArray(child.props.children)

      // First, verify that there is a single Icon child of this position
      invariant(
        (
          positionChildrenArray.length === 1 &&
          (
            positionChildrenArray[0].type === Icon ||
            positionChildrenArray[0].type === ControlSpinner
          )
        ),
        `Control>${validChildPositions[positionIndex].name} must have a single Icon or ControlSpinner child`,
      )

      const newIcon = React.cloneElement(
        positionChildrenArray[0],
        { inControl: true },
      )

      const newPositioned = React.createElement(
        positionReplacements[positionIndex],
        null,
        newIcon,
      )

      return {
        ...acc,
        [child.type === AtLeft ? 'left' : 'right']: newPositioned,
      }
    }

    // Verify we don't already have a non-position
    invariant(
      acc.input === null,
      'Control must have exactly one child (e.g. Input) (other than positions)',
    )

    return { ...acc, input: child }
  }, {
    left: null,
    right: null,
    input: null,
  })

  invariant(
    parts.input !== null,
    'Control must have one child (e.g. Input) (other than positions)',
  )

  // if loading, set right position to spinner
  const rightFinal = !loading ? parts.right : <ControlRight><ControlSpinner /></ControlRight>

  invariant(
    typeof get(parts, 'input.props.expanded') === 'undefined',
    'Set \'expanded\' on Control, not directly on its input',
  )

  const inputFinal = React.cloneElement(parts.input, {
    // forward expanded to input (i.e. used by Select to become full-width)
    expanded,

    hasIconLeft: parts.left !== null,
    hasIconRight: rightFinal !== null,
  })

  const isSelect = get(parts.input, 'type') === Select

  return (
    <ControlWrapper {...restProps} inlineBlock={isSelect && !expanded}>
      {inputFinal}
      {parts.left}
      {rightFinal}
    </ControlWrapper>
  )
}

Control.propTypes = {
  loading: PropTypes.bool,
  expanded: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
