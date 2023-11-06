/**
 * Iterates over elements of `iterable`, returning an iterable of all elements
 * `predicate` returns truthy for. The iteratee is invoked with one argument:
 * (value).
 *
 * @typeParam T - The type of the elements in the iterable.
 * @typeParam S - The type of the elements in the result iterable.
 * @param iterable - The iterable to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the new filtered iterable.
 * @see {@link reject}
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * [...filter(users, ({ active }) => active)]
 * // => [{ 'user': 'barney', 'active': true }]
 */
export function filter<T>(
  iterable: Iterable<T>,
  /**
   * @param element The current element.
   * @returns Returns `true` to keep the element, else `false`.
   */
  predicate: (element: T) => boolean,
): Generator<T>
export function filter<T, S extends T>(
  iterable: Iterable<T>,
  /**
   * @param element The current element.
   * @returns Returns `true` to keep the element, else `false`.
   * @remarks
   * Read more about narrowing:
   * [Using type predicates @ typescriptlang.org](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
   */
  predicate: (element: T) => element is S,
): Generator<S>

export function* filter<T>(
  iterable: Iterable<T>,
  predicate: (element: T) => unknown,
) {
  for (const it of iterable) {
    if (predicate(it)) {
      yield it
    }
  }
}
