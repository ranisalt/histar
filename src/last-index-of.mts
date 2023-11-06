import {findLastIndex} from './find-last-index.mjs'

/**
 * This method is like `indexOf` except that it iterates over elements of
 * `iterable` from right to left.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to inspect.
 * @param value - The value to search for.
 * @returns Returns the index of the matched value, else `-1`.
 * @example
 *
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 */
export function lastIndexOf<T>(iterable: Iterable<T>, value: T) {
  return findLastIndex(iterable, (element) => element === value)
}
