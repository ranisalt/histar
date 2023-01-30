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
): Generator<T> {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  while (!result.done && predicate(result.value)) {
    yield result.value
    result = iterator.next()
  }
}

/**
 * Creates a slice of `iterable` with `n` elements taken from the beginning.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @param n - The number of elements to take.
 * @returns Returns the slice of `iterable`.
 * @example
 *
 * [...take([1, 2, 3])]
 * // => [1]
 *
 * [...take([1, 2, 3], 2)]
 * // => [1, 2]
 *
 * [...take([1, 2, 3], 5)]
 * // => [1, 2, 3]
 *
 * [...take([1, 2, 3], 0)]
 * // => []
 */
export const take = <T>(iterable: Iterable<T>, n: number) =>
  takeWhile(iterable, () => n-- > 0)
