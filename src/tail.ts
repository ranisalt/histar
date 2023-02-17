import {drop} from './drop'

/**
 * Gets all but the first element of `iterable`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @returns Returns the slice of `iterable`.
 * @example
 *
 * [...tail([1, 2, 3])]
 * // => [2, 3]
 */
export const tail = <T>(iterable: Iterable<T>): Generator<T> =>
  drop(iterable, 1)
