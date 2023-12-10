import {generate} from './generate.mjs'

/**
 * Iterates over elements of `iterable`, returning the first element `predicate`
 * returns truthy for. The predicate is invoked with one argument: (value).
 *
 * @template T The type of the elements in the iterable.
 * @template {T} U The type of the element returned by `predicate`.
 * @param {Iterable<T>} iterable The iterable to query.
 * @param {import("./types.mjs").NarrowingPredicate<T, U>} predicate The function invoked per iteration.
 * @returns {U | undefined} Returns the matched element, else `undefined`.
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
