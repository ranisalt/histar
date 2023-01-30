/**
 * This method is like `findIndex` except that it iterates over elements of
 * `iterable` from right to left.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to inspect.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the index of the found element, else `-1`.
 * @see {@link find}, {@link findIndex}, {@link findLast}
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, ({ user }) => user == 'pebbles')
 * // => 2
 */
export const findLastIndex = <T>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns `true` if the element passes the predicate check, else
   *   `false`.
   */
  predicate: (element: T) => boolean,
): number => {
  let i = 0
  let lastIndex = -1
  for (const it of iterable) {
    if (predicate(it)) {
      lastIndex = i
    }

    ++i
  }

  return lastIndex
}

/**
 * This method is like `indexOf` except that it iterates over elements of
 * `iterable` from right to left.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to inspect.
 * @param value - The value to search for.
 * @returns Returns the index of the matched value, else `-1`.
 * @example
 *
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 */
export const lastIndexOf = <T>(iterable: Iterable<T>, value: T): number =>
  findLastIndex(iterable, (element) => element === value)
