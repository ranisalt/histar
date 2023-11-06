/**
 * Reduces `iterable` to a value which is the accumulated result of running each
 * element in `iterable` thru `iteratee`, where each successive invocation is
 * supplied the return value of the previous. If `accumulator` is not given, the
 * first element of `iterable` is used as the initial value. The iteratee is
 * invoked with two arguments: (accumulator, value).
 *
 * @typeParam T - The type of the elements in the iterable.
 * @typeParam Result - The type of the accumulated value.
 * @param iterable - The iterable to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @param initialValue - The initial value.
 * @returns Returns the accumulated value.
 * @example
 *
 * reduce([1, 2], (sum, n) => sum + n, 0)
 * // => 3
 *
 * reduce(Object.entries({ 'a': 1, 'b': 2, 'c': 1 }), (result, [value, key]) => {
 *   (result[value] || (result[value] = [])).push(key)
 *   return result
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
export function reduce<T>(
  iterable: Iterable<T>,
  /**
   * @param previousValue The accumulated value previously returned in the last
   *   invocation of the iteratee.
   * @param currentValue The current element being processed in the iterable.
   * @returns Returns the accumulated value.
   */
  iteratee: (previousValue: T, currentValue: T) => T,
): T
export function reduce<T, Result>(
  iterable: Iterable<T>,
  /**
   * @param previousValue The accumulated value previously returned in the last
   *   invocation of the iteratee, or `initialValue`, if supplied.
   * @param currentValue The current element being processed in the iterable.
   * @returns Returns the accumulated value.
   */
  iteratee: (previousValue: Result, currentValue: T) => Result,
  initialValue: Result,
): Result

export function reduce<T, Result>(
  iterable: Iterable<T>,
  iteratee: (accumulator: Result, value: T) => Result,
  initialValue?: Result,
) {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  if (result.done) {
    return initialValue as Result
  }

  if (initialValue === undefined) {
    initialValue = result.value as unknown as Result
    result = iterator.next()
  }

  while (!result.done) {
    initialValue = iteratee(initialValue, result.value)
    result = iterator.next()
  }

  return initialValue
}
