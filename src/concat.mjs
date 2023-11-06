/**
 * Creates an iterator that returns elements from the first iterable until it is
 * exhausted, then proceeds to the next iterable, until all of the `iterables`
 * are exhausted. Used for treating consecutive sequences as a single sequence.
 *
 * **Note:** you can emulate Python's chain.from_iterable() by spreading an
 *   iterable of iterables to this function.
 *
 * @template T - The type of the elements in the iterables.
 * @param {Iterable<T>[]} iterables - The iterables to concat.
 * @yields {T} Returns the new concatenated iterable.
 * @example
 *
 * [...concat([1, 2, 3], [4, 5, 6])]
 * // => [1, 2, 3, 4, 5, 6]
 */
export function* concat(...iterables) {
  for (const iterable of iterables) {
    yield* iterable
  }
}
