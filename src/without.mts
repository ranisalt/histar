import {filter} from './filter.mjs'
import {indexOf} from './index-of.mjs'

/**
 * Creates an iterable excluding all given values using `===` for equality
 * comparisons.
 *
 * @param iterable - The iterable to inspect.
 * @param values - The values to exclude.
 * @returns Returns the new iterable of filtered values.
 * @example
 *
 * [...without([2, 1, 2, 3], 1, 2)]
 * // => [3]
 */
export function without<T>(iterable: Iterable<T>, ...values: T[]) {
  return filter(iterable, (element) => indexOf(values, element) === -1)
}
