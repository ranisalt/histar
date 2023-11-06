/**
 * Checks if `predicate` returns truthy for **any** element of `iterable`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with one argument: (value).
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns `true` if any element passes the predicate check, else
 *   `false`.
 * @example
 *
 * [...some([null, 0, 'yes', false], Boolean)]
 * // => true
 */
export function some<T>(
  iterable: Iterable<T>,
  /**
   * @param element The current element.
   * @returns Returns `true` if the element passes the predicate check, else
   */
  predicate: (element: T) => boolean,
) {
  for (const element of iterable) {
    if (predicate(element)) {
      return true
    }
  }

  return false
}

export const any = some
