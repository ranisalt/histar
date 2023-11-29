import {generate} from './generate.mjs'

/**
 * Gets the first element of `iterable`.
 *
 * @template T The type of the elements in the iterable.
 * @param {Iterable<T>} iterable The iterable to query.
 * @returns {T | undefined} Returns the first element of `iterable`.
 * @see {@link last}
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
export function head(iterable) {
  return generate(iterable).next().value
}

export const first = head
