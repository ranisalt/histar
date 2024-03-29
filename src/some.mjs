/**
 * Checks if `predicate` returns truthy for **any** element of `iterable`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with one argument: (value).
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @param {import("./types.mjs").UnaryPredicate<T, boolean>} predicate - The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check, else
 *   `false`.
 * @example
 *
 * [...some([null, 0, 'yes', false], Boolean)]
 * // => true
 */
export function some(iterable, predicate) {
  for (const element of iterable) {
    if (predicate(element)) {
      return true
    }
  }

  return false
}

export const any = some
