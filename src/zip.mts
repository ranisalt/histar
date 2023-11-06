import {zipWith} from './zip-with.mjs'

/**
 * Creates an array of grouped elements, the first of which contains the first
 * elements of the given arrays, the second of which contains the second
 * elements of the given arrays, and so on.
 *
 * @typeParam T - The type of the elements in the first iterable.
 * @typeParam U - The type of the elements in the second iterable.
 * @param iterable1 - First array to process.
 * @param iterable2 - Second array to process.
 * @returns Returns the new array of grouped elements.
 * @see {@link zipWith}
 * @example
 *
 * [...zip(['a', 'b'], [1, 2])]
 * // => [['a', 1], ['b', 2]]
 */
export function zip<T, U>(iterable1: Iterable<T>, iterable2: Iterable<U>) {
  return zipWith(iterable1, iterable2, (a, b) => [a, b] as [typeof a, typeof b])
}
