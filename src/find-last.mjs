/**
 * This method is like `find` except that it iterates over elements of
 * `iterable` from right to left.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to inspect.
 * @param {import("./find.mjs").FindPredicate<T>} predicate - The function invoked per iteration.
 * @returns Returns the matched element, else `undefined`.
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
