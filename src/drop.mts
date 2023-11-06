import {dropWhile} from './drop-while.mjs'

/**
 * Creates a slice of `iterable` with `n` elements dropped from the beginning.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @param n - The number of elements to drop.
 * @returns Returns the slice of `iterable`.
 * @example
 *
 * [...drop([1, 2, 3])]
 * // => [2, 3]
 *
 * [...drop([1, 2, 3], 2)]
 * // => [3]
 *
 * [...drop([1, 2, 3], 5)]
 * // => []
 *
 * [...drop([1, 2, 3], 0)]
 * // => [1, 2, 3]
 */
export function drop<T>(iterable: Iterable<T>, n: number) {
  return dropWhile(iterable, () => n-- > 0)
}
