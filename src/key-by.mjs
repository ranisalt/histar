/**
 * Creates an object composed of keys generated from the results of running
 * each element of `iterable` thru `predicate`. The corresponding value of each
 * key is the last element responsible for generating the key. The `predicate`
 * is invoked with one argument: (value).
 *
 * @template T
 * @template U
 * @param {Iterable<T>} iterable The iterable to iterate over.
 * @param {import("./types.mjs").UnaryPredicate<T, U>} predicate The function invoked per iteration.
 * @returns {Record<U, T>} Returns the composed aggregate object.
 * @see {@link groupBy}
 */
export function keyBy(iterable, predicate) {
  /** @type {Record<U, T>} */
  const result = {}
  for (const item of iterable) {
    result[predicate(item)] = item
  }

  return result
}
