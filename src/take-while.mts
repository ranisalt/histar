/**
 * Creates a slice of `iterable` with elements taken from the beginning.
 * Elements are taken until `predicate` returns falsey. The predicate is invoked
 * with one arguments: (value).
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the slice of `iterable`.
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
export function* takeWhile<T>(
  iterable: Iterable<T>,
  /**
   * @param element The current element.
   * @returns Returns `true` to keep the element, else `false`.
   */
  predicate: (element: T) => boolean,
) {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  while (!result.done && predicate(result.value)) {
    yield result.value
    result = iterator.next()
  }
}
