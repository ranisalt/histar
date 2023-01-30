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
export const filter: {
  <T>(
    iterable: Iterable<T>,
    /**
     * @param element The current element.
     * @returns Returns `true` to keep the element, else `false`.
     */
    predicate: (element: T) => boolean,
  ): Generator<T>
  <T, S extends T>(
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
} = function* <T>(iterable: Iterable<T>, predicate: (element: T) => unknown) {
  for (const it of iterable) {
    if (predicate(it)) {
      yield it
    }
  }
}

/**
 * Creates an iterable with all falsy values removed. The values `false`,
 * `null`, `0`, `""`, `undefined`, and `NaN` are considered falsy.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to compact.
 * @returns Returns the new iterable of filtered values.
 * @example
 *
 * [...compact([0, 1, false, 2, '', 3])]
 * // => [1, 2, 3]
 */
export const compact = <T>(iterable: Iterable<T>): Generator<T> =>
  filter(iterable, Boolean)

/**
 * The opposite of {@link filter | `filter`}, this method returns the elements
 * of `iterable` that `predicate` does **not** return truthy for.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - to iterate over.
 * @param function - invoked per iteration.
 * @returns Returns the new filtered iterable.
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * [...reject(users, ({ active }) => active)]
 * // => [{ 'user': 'fred', 'active': false }]
 */
export const reject = <T>(
  iterable: Iterable<T>,
  /**
   * @param element The current element.
   * @returns Returns `true` to drop the element, else `false`.
   */
  predicate: (element: T) => boolean,
): Generator<T> => filter(iterable, (element) => !predicate(element))
