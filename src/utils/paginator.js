import range from 'lodash.range'


/**
 * Get pagination items given total # and current #
 */
export default function paginator(total, current) {
  // TODO

  return {
    previous: { pageNumber: current - 1, disabled: total <= 0 || current <= 1, active: false },
    next: { pageNumber: current + 1, disabled: total <= 0 || current >= total, active: false },
    items: range(0, total).map((n) => n + 1).map((pageNumber) =>
      ({
        pageNumber,
        disabled: false, // TODO
        active: pageNumber === current,
      }),
    ),
  }
}
