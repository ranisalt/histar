/**
 * Fills elements of `iterable` with `value` from `start` up to, but not
 * including, `end`.
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the value to fill the iterable with.
 * @param {Iterable<T>} iterable - The iterable to fill.
 * @param {U} value - The value to fill `iterable` with.
 * @param {number} [start] - The start position.
 * @param {number} [end] - The end position.
 * @yields Returns the filled iterable.
 * @example
 *
 * [...fill([1, 2, 3], 'a')]
 * // => ['a', 'a', 'a']
 *
 * [...fill(Array(3), 2)]
 * // => [2, 2, 2]
 *
 * [...fill([4, 6, 8, 10], '*', 1, 3)]
 * // => [4, '*', '*', 10]
 */
export function* fill(
  iterable,
  value,
  start = 0,
  end = Number.MAX_SAFE_INTEGER,
) {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  for (let i = 0; i < start && !result.done; ++i) {
    yield result.value
    result = iterator.next()
  }

  for (let i = start; i < end && !result.done; ++i) {
    yield value
    result = iterator.next()
  }

  while (!result.done) {
    yield result.value
    result = iterator.next()
  }
}
