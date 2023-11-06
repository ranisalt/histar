/**
 * Gets the last element of `iterable`.
 *
 * @template T The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to query.
 * @returns Returns the last element of `iterable`.
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
export function last(iterable) {
  const iterator = iterable[Symbol.iterator]()

  let previousValue
  let result = iterator.next()

  while (!result.done) {
    previousValue = result.value
    result = iterator.next()
  }

  return previousValue
}
