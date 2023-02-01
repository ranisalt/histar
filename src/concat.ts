/**
 * Creates an iterator that returns elements from the first iterable until it is
 * exhausted, then proceeds to the next iterable, until all of the `iterables`
 * are exhausted. Used for treating consecutive sequences as a single sequence.
 *
 * **Note:** you can emulate Python's chain.from_iterable() by spreading an
 *   iterable of iterables to this function.
 *
 * @typeParam T - The type of the elements in the iterables.
 * @param iterables - The iterables to concat.
 * @returns Returns the new concatenated iterable.
 * @example
 *
 * [...concat([1, 2, 3], [4, 5, 6])]
 * // => [1, 2, 3, 4, 5, 6]
 */
export function* concat<T>(...iterables: Array<Iterable<T>>): Generator<T> {
  for (const iterable of iterables) {
    for (const element of iterable) {
      yield element
    }
  }
}
