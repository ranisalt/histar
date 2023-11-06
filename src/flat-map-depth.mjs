import {flattenDepth} from './flatten-depth.mjs'
import {map} from './map.mjs'

/**
 * This method is like `flatMap` except that it recursively flattens the mapped
 * results up to `depth` times.
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the elements in the result iterable.
 * @param {Iterable<T>} iterable - The collection to iterate over.
 * @param {import('./types.mjs').UnaryPredicate<T, U>} predicate - The function invoked per iteration.
 * @param {number} depth - The maximum recursion depth.
 * @yields Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDeep}, {@link flatten}, {@link flattenDeep}, {@link flattenDepth}, {@link map}
 * @example
 *
 * const duplicate = (n) => [[[n, n]]]
 *
 * [...flatMapDepth([1, 2], duplicate, 2)]
 * // => [[1, 1], [2, 2]]
 */
export function flatMapDepth(iterable, predicate, depth) {
  return flattenDepth(map(iterable, predicate), depth)
}
