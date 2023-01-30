/**
 * Gets the last element of `iterable`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @returns Returns the last element of `iterable`.
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
export const last = <T>(iterable: Iterable<T>): T | undefined => {
  const iterator = iterable[Symbol.iterator]()

  let previousValue: T | undefined
  let result = iterator.next()

  while (!result.done) {
    previousValue = result.value
    result = iterator.next()
  }

  return previousValue
}
