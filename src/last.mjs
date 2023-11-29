/**
 * Gets the last element of `iterable`.
 *
 * @template T The type of the elements in the iterable.
 * @param {Iterable<T>} iterable The iterable to query.
 * @returns {T | undefined} Returns the last element of `iterable`.
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
export function last(iterable) {
  let previousValue
  for (const value of iterable) {
    previousValue = value
  }

  return previousValue
}
