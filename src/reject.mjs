import {filter} from './filter.mjs'

/**
 * The opposite of {@link filter | `filter`}, this method returns the elements
 * of `iterable` that `predicate` does **not** return truthy for.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - to iterate over.
 * @param {import('./filter.mjs').BooleanFilterPredicate<T>} function - invoked per iteration.
 * @yields Returns the new filtered iterable.
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
export function reject(iterable, predicate) {
  return filter(iterable, (element) => !predicate(element))
}
