import {flattenDepth} from './flatten-depth.mjs'

/**
 * Flattens `iterable` a single level deep.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T | Iterable<T>>} iterable - The iterable to flatten.
 * @yields {T} Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDeep}, {@link flatMapDepth}, {@link flattenDeep}, {@link flattenDepth}
 * @example
 *
 * [...flatten([1, [2, [3, [4]], 5]])]
 * // => [1, 2, [3, [4]], 5]
 */
export function flatten(iterable) {
  return flattenDepth(iterable, 1)
}
