import React from 'react'
import PropTypes from 'prop-types'

import {
  styled,
  capitalize,
  negate,
  propTypeCheckableType,
  propTypeBrand,
} from '../../utils'


const StyledCheckGroup = styled.div((p, t) => ({
  position: 'relative',
  display: 'block',
  marginTop: t.checkableMargin,
}))

const StyledBaseLabel = styled.label(({ brand, disabled }, t) => ({
  cursor: 'pointer',
  display: 'inline-block',
  paddingLeft: t.checkableInputGutter,

  // Brand
  ...brand && { color: t[`brand${capitalize(brand)}`] },

  // Disabled
  ...disabled && { color: t.grayLight, cursor: 'not-allowed' },
}))

const StyledBaseInput = styled.input(({ disabled }, t) => ({
  cursor: 'pointer',
  position: 'absolute',
  marginTop: t.checkableInputMarginY,
  marginLeft: negate(t.checkableInputGutter),

  // Disabled
  ...disabled && { cursor: 'not-allowed' },
}))


export default function Checkable({ name, type, value, label, brand, disabled }) {
  return (
    <StyledCheckGroup>
      <StyledBaseLabel disabled={disabled} brand={brand}>
        <StyledBaseInput name={name} type={type} value={value} disabled={disabled} /> {label}
      </StyledBaseLabel>
    </StyledCheckGroup>
  )
}

Checkable.propTypes = {
  name: PropTypes.string,
  type: propTypeCheckableType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, // has default (blank)

  brand: propTypeBrand,
  disabled: PropTypes.bool,
}

Checkable.defaultProps = {
  value: '',
}
