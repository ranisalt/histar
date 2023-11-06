import {takeWhile} from './take-while.mjs'

/**
 * Creates a slice of `iterable` with `n` elements taken from the beginning.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to query.
 * @param {number} n - The number of elements to take.
 * @yields Returns the slice of `iterable`.
 * @example
 *
 * [...take([1, 2, 3])]
 * // => [1]
 *
 * [...take([1, 2, 3], 2)]
 * // => [1, 2]
 *
 * [...take([1, 2, 3], 5)]
 * // => [1, 2, 3]
 *
 * [...take([1, 2, 3], 0)]
 * // => []
 */
export function take(iterable, n) {
  return takeWhile(iterable, () => n-- > 0)
}
