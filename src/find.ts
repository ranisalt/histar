/**
 * Iterates over elements of `iterable`, returning the first element `predicate`
 * returns truthy for. The predicate is invoked with one argument: (value).
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterator - The iterator to query.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the matched element, else `undefined`.
 */
export const find = <T>(
  iterator: Iterator<T>,
  /**
   * @param element - The current element.
   * @returns Returns `true` if the element passes the predicate check, else
   *   `false`.
   */
  predicate: (element: T) => boolean,
): T | undefined => {
  let result = iterator.next()
  while (!result.done) {
    if (predicate(result.value)) {
      return result.value
    }

    result = iterator.next()
  }

  return undefined
}
