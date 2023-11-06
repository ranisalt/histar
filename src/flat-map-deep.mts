import {flatMapDepth} from './flat-map-depth.mjs'

/**
 * This method is like `flatMap` except that it recursively flattens the mapped
 * results.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @typeParam U - The type of the elements in the result iterable.
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDepth}, {@link flatten}, {@link flattenDeep}, {@link flattenDepth}, {@link map}
 * @example
 *
 * const duplicate = (n) => [[[n, n]]]
 *
 * [...flatMapDeep([1, 2], duplicate)]
 * // => [1, 1, 2, 2]
 */
export function flatMapDeep<T, U>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns the new mapped value.
   */
  predicate: (element: T) => U,
) {
  return flatMapDepth(iterable, predicate, Number.MAX_SAFE_INTEGER)
}
