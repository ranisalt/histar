import {indexOf} from './index-of.mjs'

/**
 * Checks if `value` is in `iterable` using `===` for equality comparisons.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to inspect.
 * @param {T} value - The value to search for.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * includes([1, 2, 3], 1)
 * // => true
 *
 * includes([1, 2, 3], 1, 2)
 * // => false
 */
export function includes(iterable, value) {
  return indexOf(iterable, value) !== -1
}
