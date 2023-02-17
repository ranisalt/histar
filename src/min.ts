import {minBy} from './min-by'

/**
 * Computes the minimum value of `iterable`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to iterate over.
 * @returns Returns the minimum value.
 * @example
 *
 * min([4, 2, 8, 6])
 * // => 2
 */
export const min = <T>(iterable: Iterable<T>): T => minBy(iterable, (x) => x)
