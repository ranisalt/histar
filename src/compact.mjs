import {filter} from './filter.mjs'

/**
 * Creates an iterable with all falsy values removed. The values `false`,
 * `null`, `0`, `""`, `undefined`, and `NaN` are considered falsy.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to compact.
 * @yields {T} Returns the new iterable of filtered values.
 * @example
 *
 * [...compact([0, 1, false, 2, '', 3])]
 * // => [1, 2, 3]
 */
export function compact(iterable) {
  return filter(iterable, Boolean)
}
