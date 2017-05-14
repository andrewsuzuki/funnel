import React from 'react'
import PropTypes from 'prop-types'

import { styled, makeInputStyles } from '../../utils'

import { before } from '../../mixins'


export const makeBaseItemStyles = ({ active, disabled }) => ({
  ...makeInputStyles({ active, disabled }),
  userSelect: 'none',
  fontSize: '1em',
  paddingLeft: '0.5em',
  paddingRight: '0.5em',
  justifyContent: 'center',
  marginTop: '0.25rem',
  marginRight: '0.25rem',
  marginBottom: '0.25rem',
  marginLeft: '0.25rem',
  textAlign: 'center',
})


export const LinkItem = styled.a(({ active, disabled }) => ({
  ...makeBaseItemStyles({ active, disabled }),
}))


LinkItem.propTypes = {
  active: PropTypes.bool, // has default
  disabled: PropTypes.bool, // has default
  onClick: PropTypes.func.isRequired,
}

LinkItem.defaultProps = {
  active: false,
  disabled: false,
}


export const Ellipsis = styled.span({
  ...makeBaseItemStyles(),
  // TODO more
  ...before({
    content: '"\\2026"', // &hellip
  }),
})


const Pagination = ({ total, current }) => {
  if (total <= 0) {
    return null
  }

  // TODO
  return null
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
}

export default Pagination
