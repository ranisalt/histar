/**
 * Creates an iterator returning elements from `iterable` and saving a copy of
 * each. When `iterable` is exhausted, return elements from the saved copy.
 * Repeats indefinitely.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to cycle through.
 * @yields {T} Returns the new iterator.
 * @example
 *
 * [...cycle([1, 2, 3])]
 * // => [1, 2, 3, 1, 2, 3, 1, 2, 3, ...] (infinite)
 */
export function* cycle(iterable) {
  /** @type {T[]} */
  const saved = []

  for (const it of iterable) {
    saved.push(it)
    yield it
  }

  while (saved.length > 0) {
    for (const it of saved) {
      yield it
    }
  }
}
