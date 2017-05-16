import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'

import { styled } from '../../utils'

import { padding, margin, makeInputStyles, hover } from '../../mixins'


// also used by ./Ellipsis
export const makeBaseItemStyles = ({ active, disabled } = {}, t) => merge(
  {
    ...makeInputStyles({ active, disabled }, t),

    width: 'auto',
    minWidth: '2.25em',

    userSelect: 'none',
    ...padding(null, '0.5em'),
    ...margin('0.25rem'),
    fontSize: '1em',
    textAlign: 'center',

    // justifyContent: 'center', // NOTE enable after input styles are redone with inline-flex?

    flexGrow: 0,
    flexShrink: 0,

    color: t.buttonDefaultColor,
  }, {
    ...hover({
      textDecoration: 'none',
    }),
  },
  active && {
    color: t.white,
    backgroundColor: t.brandPrimary,

    ...hover({
      color: t.white,
    }),
  },
  disabled && {
    opacity: 0.65,

    ...hover({
      color: t.buttonDefaultColor,
    }),
  },
)


const LinkItemBase = styled.a(({ onClick, active, disabled }, t) => ({
  ...makeBaseItemStyles({ active, disabled }, t),
}))


const LinkItem = ({ pageNumber, onPageClick, disabled, children, ...restProps }) =>
  React.createElement(
    LinkItemBase,
    {
      ...restProps,
      disabled,
      onClick: (e) => (!disabled && onPageClick(pageNumber, e)),
    },
    children || pageNumber,
  )


LinkItem.propTypes = {
  active: PropTypes.bool, // has default
  disabled: PropTypes.bool, // has default

  pageNumber: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,

  children: PropTypes.node, // not required, replaced with pageNumber if not given
}

LinkItem.defaultProps = {
  active: false,
  disabled: false,
}

export default LinkItem
