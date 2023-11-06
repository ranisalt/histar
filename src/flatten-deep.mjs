import {flattenDepth} from './flatten-depth.mjs'

/**
 * Recursively flattens `iterable`.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T | Iterable<T>>} iterable The iterable to flatten.
 * @yields {T} Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDeep}, {@link flatMapDepth}, {@link flatten}, {@link flattenDepth}
 * @example
 *
 * [...flattenDeep([1, [2, [3, [4]], 5]])]
 * // => [1, 2, 3, 4, 5]
 */
export function flattenDeep(iterable) {
  return flattenDepth(iterable, Number.MAX_SAFE_INTEGER)
}
