/**
 * @template T
 * @param {Iterable<T>} iterable
 * @yields {T}
 */
export function* generate(iterable) {
  for (const value of iterable) {
    yield value
  }
}
