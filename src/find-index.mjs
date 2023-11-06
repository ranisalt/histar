/**
 * This method is like {@link find | `find`} except that it returns the index of the
 * first element `predicate` returns truthy for instead of the element itself.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to inspect.
 * @param {import("./types.mjs").UnaryPredicate<T, boolean>} predicate - The function invoked per iteration.
 * @returns Returns the index of the found element, else `-1`.
 * @example
 *
 * findIndex(users, ({ user }) => user === 'fred');
 * // => 1
 */
export function findIndex(iterable, predicate) {
  let i = 0
  for (const it of iterable) {
    if (predicate(it)) {
      return i
    }

    ++i
  }

  return -1
}
