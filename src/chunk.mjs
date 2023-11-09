import {chunkBy} from './chunk-by.mjs'

/**
 * Creates an iterable of elements split into groups the length of `size`. If
 * `iterable` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T>} iterable - The iterable to process.
 * @param {number} size - The length of each chunk
 * @yields {T[]} Returns the new iterable of chunks.
 * @example
 *
 * [...chunk(['a', 'b', 'c', 'd'], 2)]
 * // => [['a', 'b'], ['c', 'd']]
 *
 * [...chunk(['a', 'b', 'c', 'd'], 3)]
 * // => [['a', 'b', 'c'], ['d']]
 */
export function chunk(iterable, size) {
  let i = 0
  return chunkBy(iterable, () => Math.floor(i++ / size))
}
