import {map} from './map.mjs'
import {range} from './range.mjs'

/**
 * Invokes the predicate `n` times, returning an iterable of the results of each
 * invocation. The predicate is invoked with one argument: (index).
 *
 * @template T - The type of the elements in the iterable.
 * @param {number} n The number of times to invoke `predicate`.
 * @param {import('./types.mjs').UnaryPredicate<number, T>} predicate The function invoked per iteration.
 * @yields {T} Returns the iterable of results.
 * @example
 *
 * [...times(3, String)]
 * // => ['0', '1', '2']
 *
 * [...times(4, () => 0)]
 * // => [0, 0, 0, 0]
 */
export function times(n, predicate) {
  return map(range(n), (index) => predicate(index))
}
