/**
 * This method is like `findIndex` except that it iterates over elements of
 * `iterable` from right to left.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to inspect.
 * @param {import("./types.mjs").UnaryPredicate<T, boolean>} predicate - The function invoked per iteration.
 * @returns {number} Returns the index of the found element, else `-1`.
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
export function findLastIndex(iterable, predicate) {
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
