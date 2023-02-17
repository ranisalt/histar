import {range} from './range'

/**
 * This method is like `range` except that it populates values in descending
 * order.
 *
 * @param start - The start of the range.
 * @param end - The end of the range. If `end` is not specified, it's set to
 *   `start`, and `start` is then set to `0`.
 * @param step - The value to increment or decrement by. If `step` is not
 *   specified, it's set to `1` if `start` is less than `end`, otherwise `-1`.
 * @returns Returns the range of numbers.
 * @see {@link range}
 * @example
 *
 * [...rangeRight(4)]
 * // => [3, 2, 1, 0]
 *
 * [...rangeRight(-4)]
 * // => [-3, -2, -1, 0]
 *
 * [...rangeRight(1, 5)]
 * // => [4, 3, 2, 1]
 *
 * [...rangeRight(0, 20, 5)]
 * // => [15, 10, 5, 0]
 *
 * [...rangeRight(0, -4, -1)]
 * // => [-3, -2, -1, 0]
 *
 * [...rangeRight(1, 4, 0)]
 * // => [1, 1, 1]
 *
 * [...rangeRight(0)]
 * // => []
 */
export const rangeRight = (start: number, end?: number, step?: number) =>
  range(start, end, step).reverse()
