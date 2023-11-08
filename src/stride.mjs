/**
 * Creates an iterable that consists of elements of the original iterable,
 * advancing over `size` elements at a time.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to process.
 * @param {number} size - The length of each stride
 * @yields {T} Returns the new iterable of strides.
 * @example
 *
 * [...stride(['a', 'b', 'c', 'd', 'e'], 2)]
 * // => ['a', 'c', 'e']
 *
 * [...stride(['a', 'b', 'c', 'd', 'e'], 3)]
 * // => ['a', 'd']
 */
export function* stride(iterable, size) {
  let i = 0

  for (const element of iterable) {
    if (i % size === 0) {
      yield element
    }

    ++i
  }
}
