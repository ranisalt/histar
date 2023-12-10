/**
 * This method is like `find` except that it iterates over elements of
 * `iterable` from right to left.
 *
 * @template T The type of the elements in the iterable.
 * @template {T} U The type of the element returned by `predicate`.
 * @param {Iterable<T>} iterable The iterable to inspect.
 * @param {import("./types.mjs").NarrowingPredicate<T, U>} predicate The function invoked per iteration.
 * @returns {U | undefined} Returns the matched element, else `undefined`.
 * @see {@link find}, {@link findIndex}, {@link findLastIndex}
 * @example
 *
 * findLast([1, 2, 3, 4], n => n % 2 == 1)
 * // => 3
 */
export function findLast(iterable, predicate) {
  let lastResult
  for (const it of iterable) {
    if (predicate(it)) {
      lastResult = it
    }
  }

  return lastResult
}
