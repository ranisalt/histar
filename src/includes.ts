import {indexOf} from './index-of'

/**
 * Checks if `value` is in `iterable` using `===` for equality comparisons.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to inspect.
 * @param value - The value to search for.
 * @returns Returns `true` if `value` is found, else `false`.
 * @example
 *
 * includes([1, 2, 3], 1)
 * // => true
 *
 * includes([1, 2, 3], 1, 2)
 * // => false
 */
export const includes = <T>(iterable: Iterable<T>, value: T): boolean =>
  indexOf(iterable, value) !== -1
