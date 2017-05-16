import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'

import { styled } from '../../utils'

import { padding, margin, makeInputStyles, hover, borderColor } from '../../mixins'


// also used by ./Ellipsis
export const makeBaseItemStyles = ({ active, disabled } = {}, t) => merge(
  makeInputStyles({ active, disabled }, t),
  {
    width: 'auto',
    minWidth: '2.25em',

    userSelect: 'none',
    ...padding(null, '0.5em'),
    ...margin('0.25rem'), // needs vertical margin due to possibility of wrapping
    fontSize: '1em',
    textAlign: 'center',

    flexGrow: 0,
    flexShrink: 0,

    ...hover({
      textDecoration: 'none',
    }),
  },
  // base
  {
    color: t.paginationLinkColor,
    backgroundColor: t.paginationLinkBackgroundColor,
    ...borderColor(t.paginationLinkBorderColor),

    ...hover({
      color: t.paginationLinkHoverColor,
      backgroundColor: t.paginationLinkHoverBackgroundColor,
      ...borderColor(t.paginationLinkHoverBorderColor),
    }),
  },
  active && {
    color: t.paginationLinkActiveColor,
    backgroundColor: t.paginationLinkActiveBackgroundColor,
    ...borderColor(t.paginationLinkActiveBorderColor),

    ...hover({
      color: t.paginationLinkActiveHoverColor,
      backgroundColor: t.paginationLinkActiveHoverBackgroundColor,
      ...borderColor(t.paginationLinkActiveHoverBorderColor),
    }),
  },
  disabled && {
    color: t.paginationLinkDisabledColor,
    backgroundColor: t.paginationLinkDisabledBackgroundColor,
    ...borderColor(t.paginationLinkDisabledBorderColor),

    opacity: t.paginationLinkDisabledOpacity,

    ...hover({
      color: t.paginationLinkDisabledHoverColor,
      backgroundColor: t.paginationLinkDisabledHoverBackgroundColor,
      ...borderColor(t.paginationLinkDisabledHoverBorderColor),

      opacity: t.paginationLinkDisabledHoverOpacity,
    }),
  },
)


const LinkItemBase = styled.a(({ onClick, active, disabled }, t) =>
  makeBaseItemStyles({ active, disabled }, t))


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
