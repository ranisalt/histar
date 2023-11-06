import {flattenDepth} from './flatten-depth.mjs'
import {map} from './map.mjs'

/**
 * This method is like `flatMap` except that it recursively flattens the mapped
 * results up to `depth` times.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @typeParam U - The type of the elements in the result iterable.
 * @param collection - The collection to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @param depth - The maximum recursion depth.
 * @returns Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDeep}, {@link flatten}, {@link flattenDeep}, {@link flattenDepth}, {@link map}
 * @example
 *
 * const duplicate = (n) => [[[n, n]]]
 *
 * [...flatMapDepth([1, 2], duplicate, 2)]
 * // => [[1, 1], [2, 2]]
 */
export function flatMapDepth<T, U>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns the new mapped value.
   */
  predicate: (element: T) => U,
  depth: number,
) {
  return flattenDepth(map(iterable, predicate), depth)
}
