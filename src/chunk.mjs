// @ts-check
import {filter} from './filter.mjs'
import {map} from './map.mjs'
import {times} from './times.mjs'

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
export function* chunk(iterable, size) {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  while (!result.done) {
    // FIXME: yield generators instead of arrays
    yield [
      ...map(
        filter(
          times(size, () => {
            const previousResult = result
            result = iterator.next()
            return previousResult
          }),
          (result) => !result.done,
        ),
        /** @returns {T} */
        ({value}) => value,
      ),
    ]
  }
}
