import {drop} from './drop.mjs'

/**
 * Gets all but the first element of `iterable`.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to query.
 * @yields {T} Returns the slice of `iterable`.
 * @example
 *
 * [...tail([1, 2, 3])]
 * // => [2, 3]
 */
export function tail(iterable) {
  return drop(iterable, 1)
}
