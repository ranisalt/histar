import {uniqBy} from './uniq-by.mjs'

/**
 * Creates a duplicate-free version of an iterable, in which only the first
 * occurrence of each element is kept. The order of result values is determined
 * by the order they occur in the iterable.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to process.
 * @yields {T} Returns the new iterable of unique elements.
 * @example
 *
 * [...stride(['a', 'b', 'c', 'd', 'e'], 2)]
 * // => ['a', 'c', 'e']
 *
 * [...stride(['a', 'b', 'c', 'd', 'e'], 3)]
 * // => ['a', 'd']
 */
export function uniq(iterable) {
  return uniqBy(iterable, (element) => element)
}
