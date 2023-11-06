/**
 * @overload
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable
 * @param {import("./types.mjs").UnaryPredicate<T, boolean>} predicate
 * @yields {T} Returns the new filtered iterable.
 */

/**
 * @overload
 * @template T - The type of the elements in the iterable.
 * @template S - The type of the elements in the returned iterable.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @param {import("./types.mjs").NarrowingPredicate<T, S>} predicate - The function invoked per iteration.
 * @yields {S} Returns the new filtered iterable.
 */

/**
 * Iterates over elements of `iterable`, returning an iterable of all elements
 * `predicate` returns truthy for. The iteratee is invoked with one argument:
 * (value).
 *
 * @template T - The type of the elements in the iterable.
 * @template S - The type of the elements in the returned iterable.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @param {import("./types.mjs").UnaryPredicate<T, boolean> | import("./types.mjs").NarrowingPredicate<T, S>} predicate - The function invoked per iteration.
 * @yields {T | S} Returns the new filtered iterable.
 * @see {@link reject}
 * @remarks
 * Read more about narrowing:
 * [Using type predicates @ typescriptlang.org](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
 *
 * @example
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * [...filter(users, ({ active }) => active)]
 * // => [{ 'user': 'barney', 'active': true }]
 */
export function* filter(iterable, predicate) {
  for (const it of iterable) {
    if (predicate(it)) {
      yield it
    }
  }
}
