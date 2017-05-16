import React from 'react'
import PropTypes from 'prop-types'

import {
  paginator,
  propTypeSize,
  propTypeHorizontalPosition,
  propTypeElementLike,
  propTypeBreakpoint,
} from '../../utils'

import Wrapper from './Wrapper'
import Splitter from './Splitter'
import PageNumbersWrapper from './PageNumbersWrapper'
import PreviousNextWrapper from './PreviousNextWrapper'
import LinkItem from './LinkItem'
import Ellipsis from './Ellipsis'


const orderLookup = {
  left: [2, 3, 1],
  right: [1, 2, 3],
  center: [1, 3, 2],
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

    breakAt,
  } = props

  const { previous, next, items } = paginator(total, current, delta)

  const [previousOrder, nextOrder, itemsOrder] = orderLookup[pageNumbersPosition]

  return (
    <Wrapper size={size} breakAt={breakAt}>
      {/* Previous */}
      {!previous || !showPreviousNext ? null : (
        <PreviousNextWrapper key="previous" order={previousOrder} breakAt={breakAt}>
          {React.createElement(itemComponent, { onPageClick, ...previous }, previousChildren)}
        </PreviousNextWrapper>
      )}

      {/* Next */}
      {!next || !showPreviousNext ? null : (
        <PreviousNextWrapper key="next" order={nextOrder} breakAt={breakAt}>
          {React.createElement(itemComponent, { onPageClick, ...next }, nextChildren)}
        </PreviousNextWrapper>
      )}

      <Splitter breakAt={breakAt} />

      {/* Items */}
      {!showPageNumbers || total <= 0 ? null : (
        <PageNumbersWrapper key="items" position={pageNumbersPosition} order={itemsOrder} breakAt={breakAt}>
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
      )}
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

  breakAt: propTypeBreakpoint.isRequired, // has default
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

  breakAt: 'tablet',
}

export default Pagination
