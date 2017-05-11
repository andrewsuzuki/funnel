import React from 'react'
import PropTypes from 'prop-types'

import {
  styled,
  propTypeBrand,
  propTypeSize,
  propTypeFieldMeta,
  connectField,
} from '../../utils'

import { makeInputStyles, square, after } from '../../mixins'


const Wrapper = styled.div(({ hasIconRight }, t) => ({
  position: 'relative',

  ...!hasIconRight &&
    // caret
    after({
      position: 'absolute',
      marginTop: '-0.375em',
      top: 't/50%',
      right: 'r/1.125em',
      display: 'd/block',
      ...square(t.selectCaretSize),
      borderWidth: '1px',
      borderStyle: 'bordS/solid',
      borderColor: 'bordC/~selectCaretColor',
      zIndex: 'z/~zIndices.selectCaret',

      borderRight: 0,
      borderTop: 0,
      content: '" "',
      pointerEvents: 'none',
      transform: 'rotate(-45deg)',
    }),
}))


const StyledBaseSelect = styled.select((props, t) => ({
  ...makeInputStyles(props, t),
  width: props.expanded ? '100%' : 'auto', // override input style maybe (100%)
}))


const ActualSelect = connectField(StyledBaseSelect, 'id', false)


export default function Select(props) {
  // Wrap actual select so that we can position a custom caret
  // Force hasIconRight on field since it will always
  // have something there (caret or Icon)
  return <Wrapper {...props}><ActualSelect {...props} hasIconRight /></Wrapper>
}

Select.propTypes = {
  expanded: PropTypes.bool,

  brand: propTypeBrand,
  size: propTypeSize,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,

  hasIconLeft: PropTypes.bool,
  hasIconRight: PropTypes.bool,

  fieldMeta: propTypeFieldMeta,
}
