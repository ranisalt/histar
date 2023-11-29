/**
 * Creates a slice of `iterable` with elements taken from the beginning.
 * Elements are taken until `predicate` returns falsey. The predicate is invoked
 * with one arguments: (value).
 *
 * @template T The type of the elements in the iterable.
 * @param {Iterable<T>} iterable The iterable to query.
 * @param {import("./types.mjs").UnaryPredicate<T, boolean>} predicate The function invoked per iteration.
 * @yields {T} Returns the slice of `iterable`.
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * [...takeWhile(users, ({ active }) => active)]
 * // => [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true }
 * ]
 */
export function* takeWhile(iterable, predicate) {
  for (const value of iterable) {
    if (!predicate(value)) {
      break
    }

    yield value
  }
}
