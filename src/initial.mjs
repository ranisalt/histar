/**
 * Gets all but the last element of `iterable`.
 *
 * @template T The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to query.
 * @yields Returns the slice of `iterable`.
 * @example
 *
 * [...initial([1, 2, 3])]
 * // => [1, 2]
 */
export function* initial(iterable) {
  const iterator = iterable[Symbol.iterator]()

  let previousResult = iterator.next()
  if (previousResult.done) {
    return
  }

  let result = iterator.next()
  while (!result.done) {
    yield previousResult.value
    previousResult = result
    result = iterator.next()
  }
}
