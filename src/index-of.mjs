import {findIndex} from './find-index.mjs'

/**
 * Gets the index at which the first occurrence of `value` is found in
 * `iterable` using `===` for equality comparisons.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to inspect.
 * @param {T} value - The value to search for.
 * @returns Returns the index of the matched value, else `-1`.
 * @example
 *
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 */
export function indexOf(iterable, value) {
  return findIndex(iterable, (element) => element === value)
}
