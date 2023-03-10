/**
 * Checks if `predicate` returns truthy for **all** elements of `iterable`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, iterable).
 *
 * **Note:** This method returns `true` for
 * [empty iterables](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty iterables.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns `true` if all elements pass the predicate check,
 *   else `false`.
 * @example
 *
 * every([true, 1, null, 'yes'], Boolean)
 * // => false
 */
export const every = <T>(
  iterable: Iterable<T>,
  /**
   * @param element The current element.
   * @returns Returns `true` if the element passes the predicate check, else
   *   `false`.
   */
  predicate: (element: T) => boolean,
): boolean => {
  for (const element of iterable) {
    if (!predicate(element)) {
      return false
    }
  }

  return true
}
