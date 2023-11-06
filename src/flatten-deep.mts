import {flattenDepth} from './flatten-depth.mjs'

/**
 * Recursively flattens `iterable`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to flatten.
 * @param iterable The iterable to flatten.
 * @returns Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDeep}, {@link flatMapDepth}, {@link flatten}, {@link flattenDepth}
 * @example
 *
 * [...flattenDeep([1, [2, [3, [4]], 5]])]
 * // => [1, 2, 3, 4, 5]
 */
export function flattenDeep<T>(iterable: Iterable<T | Iterable<T>>) {
  return flattenDepth(iterable, Number.MAX_SAFE_INTEGER)
}
