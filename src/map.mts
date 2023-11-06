/**
 * Creates an iterable of values by running each element of `iterable` thru
 * `iteratee`. The iteratee is invoked with one argument: (value).
 *
 * @param iterable - The iterable to iterate over.
 * @param iteratee - The function invoked per iteration.
 * @returns Returns the new mapped iterable.
 * @example
 *
 * const square = (n) => n * n
 *
 * [...map([4, 8], square)]
 * // => [16, 64]
 */
export function* map<T, U>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns the new mapped value.
   */
  predicate: (element: T) => U,
) {
  for (const it of iterable) {
    yield predicate(it)
  }
}
