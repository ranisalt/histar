import {flatMapDepth} from './flat-map-depth.mjs'

/**
 * This method is like `flatMap` except that it recursively flattens the mapped
 * results.
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the elements in the result iterable.
 * @param {Iterable<T>} iterable - The collection to iterate over.
 * @param {import('./types.mjs').UnaryPredicate<T, U>} predicate - The function invoked per iteration.
 * @yields {U} Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDepth}, {@link flatten}, {@link flattenDeep}, {@link flattenDepth}, {@link map}
 * @example
 *
 * const duplicate = (n) => [[[n, n]]]
 *
 * [...flatMapDeep([1, 2], duplicate)]
 * // => [1, 1, 2, 2]
 */
export function flatMapDeep(iterable, predicate) {
  return flatMapDepth(iterable, predicate, Number.MAX_SAFE_INTEGER)
}
