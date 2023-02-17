import {maxBy} from './max-by'

/**
 * Computes the maximum value of `iteratee`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to iterate over.
 * @returns Returns the maximum value.
 * @example
 *
 * max([4, 2, 8, 6])
 * // => 8
 */
export const max = <T>(iterable: Iterable<T>): T => maxBy(iterable, (x) => x)
