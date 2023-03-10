import {flattenDepth} from './flatten-depth'

/**
 * Flattens `iterable` a single level deep.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to flatten.
 * @returns Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDeep}, {@link flatMapDepth}, {@link flattenDeep}, {@link flattenDepth}
 * @example
 *
 * [...flatten([1, [2, [3, [4]], 5]])]
 * // => [1, 2, [3, [4]], 5]
 */
export const flatten = <T>(iterable: Iterable<T | Iterable<T>>) =>
  flattenDepth(iterable, 1)
