/**
 * Iterates over elements of `iterable`, returning the first element `predicate`
 * returns truthy for. The predicate is invoked with one argument: (value).
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterator<T>} iterator - The iterator to query.
 * @param {import("./types.mjs").UnaryPredicate<T, boolean>} predicate - The function invoked per iteration.
 * @returns Returns the matched element, else `undefined`.
 */
export function find(iterator, predicate) {
  let result = iterator.next()
  while (!result.done) {
    if (predicate(result.value)) {
      return result.value
    }

    result = iterator.next()
  }

  return undefined
}
