import {flatMapDepth} from './flat-map-depth.mjs'
import {map} from './map.mjs'

/**
 * Creates a flattened iterable of values by running each element in `iterable`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with one argument: (value).
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the elements in the result iterable.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @param {import('./flat-map-depth.mjs').FlatMapDepthIteratee<T, U>} predicate - The function invoked per iteration.
 * @yields Returns the new flattened iterable.
 * @see {@link flatMapDeep}, {@link flatMapDepth}, {@link flatten}, {@link flattenDeep}, {@link flattenDepth}, {@link map}
 * @example
 *
 * const duplicate = (n) => [n, n]
 *
 * [...flatMap([1, 2], duplicate)]
 * // => [1, 1, 2, 2]
 */
export function flatMap(iterable, predicate) {
  return flatMapDepth(iterable, predicate, 1)
}
