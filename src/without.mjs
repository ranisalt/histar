import {filter} from './filter.mjs'
import {indexOf} from './index-of.mjs'

/**
 * Creates an iterable excluding all given values using `===` for equality
 * comparisons.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to inspect.
 * @param {T[]} values - The values to exclude.
 * @yields {T} Returns the new iterable of filtered values.
 * @example
 *
 * [...without([2, 1, 2, 3], 1, 2)]
 * // => [3]
 */
export function without(iterable, ...values) {
  return filter(iterable, (element) => indexOf(values, element) === -1)
}
