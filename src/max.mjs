import {maxBy} from './max-by.mjs'

/**
 * Computes the maximum value of `iteratee`.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @returns Returns the maximum value.
 * @example
 *
 * max([4, 2, 8, 6])
 * // => 8
 */
export function max(iterable) {
  return maxBy(iterable, (x) => x)
}
