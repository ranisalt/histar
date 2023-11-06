import {filter} from './filter.mjs'

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
export function reject<T>(
  iterable: Iterable<T>,
  /**
   * @param element The current element.
   * @returns Returns `true` to drop the element, else `false`.
   */
  predicate: (element: T) => boolean,
) {
  return filter(iterable, (element) => !predicate(element))
}
