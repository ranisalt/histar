import {minBy} from './min-by.mjs'

/**
 * Computes the minimum value of `iterable`.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @returns Returns the minimum value.
 * @example
 *
 * min([4, 2, 8, 6])
 * // => 2
 */
export function min(iterable) {
  return minBy(iterable, (x) => x)
}
