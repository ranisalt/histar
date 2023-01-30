import {filter} from './filter'
import {map} from './map'
import {times} from './times'

/**
 * Creates an iterable of elements split into groups the length of `size`. If
 * `iterable` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to process.
 * @param size - The length of each chunk
 * @returns Returns the new iterable of chunks.
 * @example
 *
 * [...chunk(['a', 'b', 'c', 'd'], 2)]
 * // => [['a', 'b'], ['c', 'd']]
 *
 * [...chunk(['a', 'b', 'c', 'd'], 3)]
 * // => [['a', 'b', 'c'], ['d']]
 */
export function* chunk<T>(
  iterable: Iterable<T>,
  size: number,
): Generator<Iterable<T>> {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  while (!result.done) {
    // FIXME: yield generators instead of arrays
    yield [
      ...map(
        filter(
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          times(size, () => {
            const previousResult = result
            result = iterator.next()
            return previousResult
          }),
          (result) => !result.done,
        ),
        ({value}) => value as T,
      ),
    ]
  }
}
