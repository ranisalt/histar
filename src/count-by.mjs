import {reduce} from './reduce.mjs'

/**
 * Creates an iterator that groups consecutive elements of the given iterable.
 * The `predicate` is a function computing a key value for each element.
 *
 * @template T The type of the elements in the iterable.
 * @template {string | number | symbol} U The type of the keys in the returned object.
 * @param {Iterable<T>} iterable The iterable to group.
 * @param {import('./types.mjs').UnaryPredicate<T, U>} predicate The function to compute the key value for each element.
 * @returns {Record<U, number>} Returns each element of the iterable with the number of consecutive
 *   elements that are equal to it.
 * @example
 *
 * countBy([1, 1, 2, 2, 3, 3, 3, 4, 4, 5], (x) => x < 3)
 * // => { false: 7, true: 3 }
 */
export function countBy(iterable, predicate) {
  return reduce(
    iterable,
    (accumulator, element) => {
      const key = predicate(element)
      accumulator[key] = (accumulator[key] ?? 0) + 1
      return accumulator
    },
    /** @type {Record<U, number>} */ ({}),
  )
}
