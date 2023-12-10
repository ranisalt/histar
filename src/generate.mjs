/**
 * @template T The type of the elements in the iterable.
 * @param {Iterable<T>} iterable The iterable to generate.
 * @yields {T}
 */
export function* generate(iterable) {
  for (const value of iterable) {
    yield value
  }
}
