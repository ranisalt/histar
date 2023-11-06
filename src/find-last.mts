/**
 * This method is like `find` except that it iterates over elements of
 * `iterable` from right to left.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to inspect.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the matched element, else `undefined`.
 * @see {@link find}, {@link findIndex}, {@link findLastIndex}
 * @example
 *
 * findLast([1, 2, 3, 4], n => n % 2 == 1)
 * // => 3
 */
export function findLast<T>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns `true` if the element passes the predicate check, else
   *   `false`.
   */
  predicate: (element: T) => boolean,
) {
  let lastResult
  for (const it of iterable) {
    if (predicate(it)) {
      lastResult = it
    }
  }

  return lastResult
}
