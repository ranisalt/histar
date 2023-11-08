import {zipWith} from './zip-with.mjs'

/**
 * Creates an array of grouped elements, the first of which contains the first
 * elements of the given arrays, the second of which contains the second
 * elements of the given arrays, and so on.
 *
 * @template T - The type of the elements in the first iterable.
 * @template U - The type of the elements in the second iterable.
 * @param {Iterable<T>} iterable1 - First array to process.
 * @param {Iterable<U>} iterable2 - Second array to process.
 * @yields {[T, U]} Returns the new array of grouped elements.
 * @see {@link zipWith}
 * @example
 *
 * [...zip(['a', 'b'], [1, 2])]
 * // => [['a', 1], ['b', 2]]
 */
export function zip(iterable1, iterable2) {
  return zipWith(
    iterable1,
    iterable2,
    /** @returns {[T, U]} */ (a, b) => [a, b],
  )
}
