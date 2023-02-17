import {takeWhile} from './take-while'

/**
 * Creates a slice of `iterable` with `n` elements taken from the beginning.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @param n - The number of elements to take.
 * @returns Returns the slice of `iterable`.
 * @example
 *
 * [...take([1, 2, 3])]
 * // => [1]
 *
 * [...take([1, 2, 3], 2)]
 * // => [1, 2]
 *
 * [...take([1, 2, 3], 5)]
 * // => [1, 2, 3]
 *
 * [...take([1, 2, 3], 0)]
 * // => []
 */
export const take = <T>(iterable: Iterable<T>, n: number) =>
  takeWhile(iterable, () => n-- > 0)
