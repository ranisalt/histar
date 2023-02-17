import {countBy} from './count-by'

/**
 * Creates an iterator that groups consecutive elements of the given iterable.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to group.
 * @returns Returns each element of the iterable with the number of consecutive
 *   elements that are equal to it.
 * @example
 *
 * count([1, 1, 2, 3, 3, 3, 4, 4, 5])
 * // => [[1, 2], [2, 1], [3, 3], [4, 2], [5, 1]]
 */
export const count = <T extends keyof any>(
  iterable: Iterable<T>,
): Record<T, number> => countBy(iterable, (x) => x)
