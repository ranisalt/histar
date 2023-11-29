import {generate} from './generate.mjs'

/**
 * Creates an iterable of elements split into groups for which `predicate`
 * returns the same value.
 *
 * @template T The type of the elements in the iterable.
 * @template U The type of the return value of `predicate`.
 * @param {Iterable<T>} iterable The iterable to process.
 * @param {import('./types.mjs').UnaryPredicate<T, U>} predicate The function invoked per iteration.
 * @yields {T[]} Returns the new iterable of chunks.
 * @example
 *
 * [...chunkBy([1.2, 2.1, 2.3, 3.4], Math.floor)]
 * // => [[1.2], [2.1, 2.3], [3.4]]
 */
export function* chunkBy(iterable, predicate) {
  const iterator = generate(iterable)

  let result = iterator.next()
  if (result.done) {
    return
  }

  let previousKey = predicate(result.value)
  let chunk = [result.value]

  result = iterator.next()
  while (!result.done) {
    // FIXME: yield generators instead of arrays
    const key = predicate(result.value)
    if (key === previousKey) {
      chunk.push(result.value)
    } else {
      yield chunk
      previousKey = key
      chunk = [result.value]
    }

    result = iterator.next()
  }

  if (chunk.length > 0) {
    yield chunk
  }
}
