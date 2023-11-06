import {filter} from './filter.mjs'

/**
 * Creates an iterable with all falsy values removed. The values `false`,
 * `null`, `0`, `""`, `undefined`, and `NaN` are considered falsy.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to compact.
 * @returns Returns the new iterable of filtered values.
 * @example
 *
 * [...compact([0, 1, false, 2, '', 3])]
 * // => [1, 2, 3]
 */
export function compact<T>(iterable: Iterable<T>) {
  return filter(iterable, Boolean)
}
