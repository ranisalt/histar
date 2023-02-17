/**
 * This method is like {@link find | `find`} except that it returns the index of the
 * first element `predicate` returns truthy for instead of the element itself.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to inspect.
 * @param predicate-  The function invoked per iteration.
 * @returns Returns the index of the found element, else `-1`.
 * @example
 *
 * findIndex(users, ({ user }) => user === 'fred');
 * // => 1
 */
export const findIndex = <T>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns `true` if the element passes the predicate check, else
   *   `false`.
   */
  predicate: (element: T) => boolean,
): number => {
  let i = 0
  for (const it of iterable) {
    if (predicate(it)) {
      return i
    }

    ++i
  }

  return -1
}
