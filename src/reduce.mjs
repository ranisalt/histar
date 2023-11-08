/**
 * Reduces `iterable` to a value which is the accumulated result of running
 * each element in `iterable` thru `predicate`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `iterable` is used as the initial value.
 * The predicate is invoked with two arguments: (accumulator, value).
 *
 * @template T - The type of the elements in the iterable.
 * @template Result - The type of the accumulated value.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @param {import("./types.mjs").UnaryPredicate<T, Result>} predicate - The function invoked per iteration.
 * @param {Result} [initialValue] - The initial value.
 * @returns {Result} Returns the accumulated value.
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
export function reduce(iterable, predicate, initialValue) {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  if (result.done) {
    return initialValue
  }

  if (initialValue === undefined) {
    initialValue = result.value
    result = iterator.next()
  }

  while (!result.done) {
    initialValue = predicate(initialValue, result.value)
    result = iterator.next()
  }

  return initialValue
}
