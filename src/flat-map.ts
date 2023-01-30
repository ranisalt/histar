import {flattenDepth} from './flatten'
import {map} from './map'

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
export const flatMapDepth = <T, U>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns the new mapped value.
   */
  predicate: (element: T) => U,
  depth: number,
) => flattenDepth(map(iterable, predicate), depth)

/**
 * Creates a flattened iterable of values by running each element in `iterable`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with one argument: (value).
 *
 * @typeParam T - The type of the elements in the iterable.
 * @typeParam U - The type of the elements in the result iterable.
 * @param iterable - The iterable to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns the new flattened iterable.
 * @see {@link flatMapDeep}, {@link flatMapDepth}, {@link flatten}, {@link flattenDeep}, {@link flattenDepth}, {@link map}
 * @example
 *
 * const duplicate = (n) => [n, n]
 *
 * [...flatMap([1, 2], duplicate)]
 * // => [1, 1, 2, 2]
 */
export const flatMap = <T, U>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns the new mapped value.
   */
  predicate: (element: T) => U,
) => flatMapDepth(iterable, predicate, 1)

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
export const flatMapDeep = <T, U>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns the new mapped value.
   */
  predicate: (element: T) => U,
) => flatMapDepth(iterable, predicate, Number.MAX_SAFE_INTEGER)
