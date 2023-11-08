/**
 * Checks if `predicate` returns truthy for **all** elements of `iterable`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, iterable).
 *
 * **Note:** This method returns `true` for
 * [empty iterables](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty iterables.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @param {import("./types.mjs").UnaryPredicate<T, boolean>} predicate - The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *   else `false`.
 * @example
 *
 * every([true, 1, null, 'yes'], Boolean)
 * // => false
 */
export function every(iterable, predicate) {
  for (const element of iterable) {
    if (!predicate(element)) {
      return false
    }
  }

  return true
}

export const all = every
