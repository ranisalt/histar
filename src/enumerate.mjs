import {range} from './range.mjs'
import {zip} from './zip.mjs'

/**
 * Enumerate an iterable, starting from a given number.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to enumerate.
 * @param {number} [start] - The number to start from.
 * @yields Returns an iterable of tuples, where the first element is the index
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
export function enumerate(iterable, start = 0) {
  return zip(range(start, Number.MAX_SAFE_INTEGER), iterable)
}
