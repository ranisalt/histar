/**
 * Creates a slice of `iterable` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsy. The iteratee is invoked
 * with one argument: (value).
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
 * [...dropWhile(users, ({ active }) => active)]
 * // => [{ 'user': 'pebbles', 'active': false }]
 */
export function* dropWhile<T>(
  iterable: Iterable<T>,
  /**
   * @param element The current element.
   * @returns Returns `true` to drop the element, else `false`.
   */
  predicate: (element: T) => boolean,
): Generator<T> {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  while (!result.done && predicate(result.value)) {
    result = iterator.next()
  }

  while (!result.done) {
    yield result.value
    result = iterator.next()
  }
}

/**
 * Creates a slice of `iterable` with `n` elements dropped from the beginning.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @param n - The number of elements to drop.
 * @returns Returns the slice of `iterable`.
 * @example
 *
 * [...drop([1, 2, 3])]
 * // => [2, 3]
 *
 * [...drop([1, 2, 3], 2)]
 * // => [3]
 *
 * [...drop([1, 2, 3], 5)]
 * // => []
 *
 * [...drop([1, 2, 3], 0)]
 * // => [1, 2, 3]
 */
export const drop = <T>(iterable: Iterable<T>, n: number): Generator<T> =>
  dropWhile(iterable, () => n-- > 0)

/**
 * Gets all but the first element of `iterable`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @returns Returns the slice of `iterable`.
 * @example
 *
 * [...tail([1, 2, 3])]
 * // => [2, 3]
 */
export const tail = <T>(iterable: Iterable<T>): Generator<T> =>
  drop(iterable, 1)
