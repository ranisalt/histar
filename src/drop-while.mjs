import {generate} from './generate.mjs'

/**
 * Creates a slice of `iterable` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsy. The predicate is
 * invoked with one argument: (value).
 *
 * @template T The type of the elements in the iterable.
 * @param {Iterable<T>} iterable The iterable to query.
 * @param {import("./types.mjs").UnaryPredicate<T, boolean>} predicate The function invoked per iteration.
 * @yields {T} Returns the slice of `iterable`.
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
export function dropWhile(iterable, predicate) {
  const iterator = generate(iterable)

  let result = iterator.next()
  while (!result.done && predicate(result.value)) {
    result = iterator.next()
  }

  return {
    [Symbol.iterator]() {
      return this
    },

    next() {
      const previousResult = result
      result = iterator.next()
      return previousResult
    },
  }
}
