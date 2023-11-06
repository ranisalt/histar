import {map} from './map.mjs'
import {range} from './range.mjs'

/**
 * Invokes the iteratee `n` times, returning an iterable of the results of each
 * invocation. The iteratee is invoked with one argument: (index).
 *
 * @template T - The type of the elements in the iterable.
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {import('./types.mjs').UnaryPredicate<number, T>} iteratee The function invoked per iteration.
 * @yields Returns the iterable of results.
 * @example
 *
 * [...times(3, String)]
 * // => ['0', '1', '2']
 *
 * [...times(4, () => 0)]
 * // => [0, 0, 0, 0]
 */
export function times(n, iteratee) {
  return map(range(n), (index) => iteratee(index))
}
