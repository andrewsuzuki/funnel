import React from 'react'
import PropTypes from 'prop-types'

import {
  styled,
  propTypeBrand,
  propTypeSize,
  propTypeFieldMeta,
  connectField,
} from '../../utils'

import {
  makeInputStyles,
  square,
  after,
  borderWidth,
  borderStyle,
  borderColor,
  msExpand,
} from '../../mixins'


const Wrapper = styled.div(({ hasIconRight, expanded }, t) => ({
  position: 'relative',
  display: 'inline-block',
  width: expanded ? '100%' : 'auto',

  // Unstyle the caret on `<select>`s
  appearance: 'none',
  ...msExpand({
    backgroundColor: 'transparent',
    border: 0,
  }),

  ...!hasIconRight &&
    // caret
    after({
      position: 'absolute',
      marginTop: '-0.375em',
      top: '50%',
      right: '1.125em',
      display: 'block',
      ...square(t.selectCaretSize),
      ...borderWidth('1px'),
      ...borderStyle('solid'),
      ...borderColor(t.selectCaretColor),
      zIndex: t.zIndices.selectCaret,

      borderRightWidth: 0,
      borderTopWidth: 0,
      content: '" "',
      pointerEvents: 'none',
      transform: 'rotate(-45deg)',
    }),
}))

Wrapper.propTypes = {
  hasIconRight: PropTypes.bool,
  expanded: PropTypes.bool,
}


const StyledBaseSelect = styled.select((props, t) => ({
  ...makeInputStyles(props, t),
  width: props.expanded ? '100%' : 'auto', // override input style maybe (100%)
}))

StyledBaseSelect.propTypes = {
  expanded: PropTypes.bool,
  // ...all other Select props (brand, size, disabled, focus, hasIconLeft, hasIconRight, fieldMeta)
}


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
  hasIconRight: PropTypes.bool, // always overridden with true

  fieldMeta: propTypeFieldMeta,
}
