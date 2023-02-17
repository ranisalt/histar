import {range} from './range'
import {zip} from './zip'

/**
 * Enumerate an iterable, starting from a given number.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to enumerate.
 * @param start - The number to start from.
 * @returns Returns an iterable of tuples, where the first element is the index
 *   and the second element is the value.
 * @see {@link range}
 * @example
 *
 * [...enumerate(['a', 'b', 'c'])]
 * // => [[0, 'a'], [1, 'b'], [2, 'c']]
 *
 * [...enumerate(['a', 'b', 'c'], 1)]
 * // => [[1, 'a'], [2, 'b'], [3, 'c']]
 */
export const enumerate = <T>(
  iterable: Iterable<T>,
  start = 0,
): Iterable<[number, T]> => zip(range(start, Number.MAX_SAFE_INTEGER), iterable)
