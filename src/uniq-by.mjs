/**
 * Creates a duplicate-free version of an iterable, in which only the first
 * occurrence of each element is kept. The order of result values is determined
 * by the order they occur in the iterable.
 *
 * @template T - The type of the elements in the iterable.
 * @template Key - The type of the key returned by the predicate.
 * @param {Iterable<T>} iterable - The iterable to process.
 * @param {import("./types.mjs").UnaryPredicate<T, Key>} predicate - The function invoked per iteration.
 * @yields {T} Returns the new iterable of unique elements.
 * @example
 *
 * [...uniqBy([2.1, 1.2, 2.3], Math.floor]
 * // => [2.1, 1.2]
 *
 * [...uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], ({ x }) => x)]
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
export function* uniqBy(iterable, predicate) {
  const seen = new Set()

  for (const element of iterable) {
    const key = predicate(element)
    if (!seen.has(key)) {
      seen.add(key)
      yield element
    }
  }
}
