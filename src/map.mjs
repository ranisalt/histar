/**
 * Creates an iterable of values by running each element of `iterable` thru
 * `predicate`. The predicate is invoked with one argument: (value).
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the elements in the returned iterable.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @param {import("./types.mjs").UnaryPredicate<T, U>} predicate - The function invoked per iteration.
 * @yields {U} Returns the new mapped iterable.
 * @example
 *
 * const square = (n) => n * n
 *
 * [...map([4, 8], square)]
 * // => [16, 64]
 */
export function* map(iterable, predicate) {
  for (const it of iterable) {
    yield predicate(it)
  }
}
