import React from 'react'
import PropTypes from 'prop-types'

import {
  styled,
  paginator,
  propTypeSize,
  propTypeHorizontalPosition,
  propTypeElementLike,
} from '../../utils'

import Wrapper from './Wrapper'
import PageNumbersWrapper from './PageNumbersWrapper'
import LinkItem from './LinkItem'
import Ellipsis from './Ellipsis'


const PreviousNextWrapper = styled.div({
  flexGrow: 0,
  flexShrink: 0,
})


const orderLookup = {
  left: ['items', 'previous', 'next'],
  right: ['previous', 'next', 'items'],
  center: ['previous', 'items', 'next'],
}


const Pagination = (props) => {
  const {
    onPageClick,
    total,
    current,
    delta,
    size,
    showPreviousNext,
    showPageNumbers,
    pageNumbersPosition,

    previousChildren,
    nextChildren,

    itemComponent,
    ellipsisComponent,
  } = props

  const { previous, next, items } = paginator(total, current, delta)

  const els = {
    items: !showPageNumbers || total <= 0 ? null : (
      <PageNumbersWrapper key="items" position={pageNumbersPosition}>
        {items.map((propsMaybe, i) =>
          propsMaybe
          ? React.createElement(itemComponent, {
            key: `page${propsMaybe.pageNumber}`,
            onPageClick,
            ...propsMaybe,
          })
          : React.createElement(ellipsisComponent, {
            key: `ellipsis${i}`,
          }),
        )}
      </PageNumbersWrapper>
    ),
    previous: !previous || !showPreviousNext ? null : (
      <PreviousNextWrapper key="previous">
        {React.createElement(itemComponent, { onPageClick, ...previous }, previousChildren)}
      </PreviousNextWrapper>
    ),
    next: !next || !showPreviousNext ? null : (
      <PreviousNextWrapper key="next">
        {React.createElement(itemComponent, { onPageClick, ...next }, nextChildren)}
      </PreviousNextWrapper>
    ),
  }

  return (
    <Wrapper size={size}>
      {orderLookup[pageNumbersPosition].map((id) => els[id])}
    </Wrapper>
  )
}

Pagination.propTypes = {
  onPageClick: PropTypes.func.isRequired,

  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  delta: PropTypes.number.isRequired,

  size: propTypeSize.isRequired, // has default
  showPreviousNext: PropTypes.bool.isRequired, // has default
  showPageNumbers: PropTypes.bool.isRequired, // has default
  pageNumbersPosition: propTypeHorizontalPosition.isRequired, // has default

  previousChildren: PropTypes.node.isRequired, // has default
  nextChildren: PropTypes.node.isRequired, // has default

  itemComponent: propTypeElementLike.isRequired, // has default
  ellipsisComponent: propTypeElementLike.isRequired, // has default
}

Pagination.defaultProps = {
  delta: 1,

  size: 'normal',
  showPreviousNext: true,
  showPageNumbers: true,
  pageNumbersPosition: 'center',

  previousChildren: 'Previous',
  nextChildren: 'Next Page',

  itemComponent: LinkItem,
  ellipsisComponent: Ellipsis,
}

export default Pagination
