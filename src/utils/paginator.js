import invariant from 'invariant'
import range from 'lodash.range'


/**
 * Make a list of page numbers and possibly one or two nulls to denote skips (ellipses)
 * @param  {Number} total       (must be a positive integer or zero)
 * @param  {Number} current     (must be an integer between zero and total)
 * @param  {Number} [delta=1]   how many items to show on each side of current page
 * @return {Array<Number|null>} array with page numbers and nulls denoting skips (ellipses)
 */
function paginationItems(total, current, delta = 1) {
  if (total <= 0) {
    return []
  }

  // leftmost describes the left limit around current (could be below 1!)
  const leftmost = current - delta
  // rightmost describes the right limit around current (could be above total!)
  const rightmost = current + delta

  // firstStraightLimit: What is the rightmost page number of the initial straight?
  // If the normal leftmost is within 3 of page 1, then there should be
  // no ellipsis between first and normal
  // (if it were instead within 2 of page 1, then there would be an ellipsis
  // filling the place of a single skipped page number (page 2))
  const firstStraightLimit = leftmost <= 3 ? rightmost : 1

  // lastStraightLimit: What is the leftmost page number of the finishing straight?
  // If the normal rightmost is within 3 of last, then there should be
  // no ellipsis between normal and last
  const lastStraightLimit = rightmost >= (total - 2) ? leftmost : total

  // Create a 'raw' range/sequence from 1 to the total number of pages
  const rangeRaw = range(1, total + 1)

  // Optimization: chick if there will be no ellipses, nor skips.
  if (lastStraightLimit <= firstStraightLimit + 2) {
    // Just return our plain 'ol range
    return rangeRaw
  }

  // Reduce a "range" with at least one ellipsis/skip (null)
  return rangeRaw.reduce((acc, n) => {
    // Straights -- include this page number?

    const inOuterStraight = n <= firstStraightLimit || n >= lastStraightLimit
    const inNormalStraight = n >= leftmost && n <= rightmost

    if (inOuterStraight || inNormalStraight) {
      return [...acc, n]
    }

    // Ellipsis

    // Check if we just left the first straight,
    // or if we are about to enter the last straight,
    // making sure not to double up on ellipses
    const isEllipsis = (n === firstStraightLimit + 1) ||
      (n === lastStraightLimit - 1 && acc[acc.length - 1] !== null)

    if (isEllipsis) {
      return [...acc, null]
    }

    // Skip this page number
    return acc
  }, [])
}


/**
 * Get pagination data given total #, current #, and delta
 */
export default function paginator(total, current, delta) {
  invariant(
    total >= 0,
    'paginator total must be greater than zero',
  )

  invariant(
    current >= 1 && current <= total,
    'paginator current must between 1 and total (inclusive)',
  )

  return {
    previous: { pageNumber: current - 1, disabled: total <= 0 || current <= 1, active: false },
    next: { pageNumber: current + 1, disabled: total <= 0 || current >= total, active: false },
    items: paginationItems(total, current, delta).map((pageNumberMaybe) =>
      !pageNumberMaybe ? pageNumberMaybe : ({
        pageNumber: pageNumberMaybe,
        disabled: false,
        active: pageNumberMaybe === current,
      })),
  }
}
