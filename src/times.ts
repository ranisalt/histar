import {map} from './map'
import {range} from './range'

/**
 * Invokes the iteratee `n` times, returning an iterable of the results of each
 * invocation. The iteratee is invoked with one argument: (index).
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param n The number of times to invoke `iteratee`.
 * @param iteratee The function invoked per iteration.
 * @returns Returns the iterable of results.
 * @example
 *
 * [...times(3, String)]
 * // => ['0', '1', '2']
 *
 * [...times(4, () => 0)]
 * // => [0, 0, 0, 0]
 */
export const times = <T>(
  n: number,
  /**
   * @param index The index of the current iteration.
   * @returns Returns the result of the iteration.
   */
  iteratee: (element: number) => T,
): Generator<T> => map(range(n), (element) => iteratee(element))
