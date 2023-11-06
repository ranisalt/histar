/**
 * Gets all but the last element of `iterable`.
 *
 * @param iterable - The iterable to query.
 * @returns Returns the slice of `iterable`.
 * @example
 *
 * [...initial([1, 2, 3])]
 * // => [1, 2]
 */
export function* initial<T>(iterable: Iterable<T>) {
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
