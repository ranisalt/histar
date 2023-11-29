import {generate} from './generate.mjs'

/**
 * Iterates over elements of `iterable`, returning the first element `predicate`
 * returns truthy for. The predicate is invoked with one argument: (value).
 *
 * @template T The type of the elements in the iterable.
 * @param {Iterable<T>} iterable The iterable to query.
 * @param {import("./types.mjs").UnaryPredicate<T, boolean>} predicate The function invoked per iteration.
 * @returns {T | undefined} Returns the matched element, else `undefined`.
 */
export function find(iterable, predicate) {
  const iterator = generate(iterable)

  let result = iterator.next()
  while (!result.done) {
    if (predicate(result.value)) {
      return result.value
    }

    result = iterator.next()
  }

  return undefined
}
