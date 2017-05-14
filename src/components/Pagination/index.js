import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '../../utils'

import { before, padding, margin, makeInputStyles } from '../../mixins'


export const makeBaseItemStyles = ({ active, disabled } = {}, t) => ({
  ...makeInputStyles({ active, disabled }, t),

  userSelect: 'none',
  ...padding(null, '0.5em'),
  ...margin('0.25rem'),
  justifyContent: 'center', // NOTE ?
  fontSize: '1em',
  textAlign: 'center',
})


export const LinkItem = styled.a(({ active, disabled }, t) => ({
  ...makeBaseItemStyles({ active, disabled }, t),
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


export const Ellipsis = styled.span((p, t) => ({
  ...makeBaseItemStyles({}, t),
  // TODO more
  ...before({
    content: '"\\2026"', // &hellip
  }),
}))


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
