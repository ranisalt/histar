import {isIterable} from './utils.mjs'

/**
 * Recursively flatten `iterable` up to `depth` times.
 *
 * @param iterable - The iterable to flatten.
 * @param depth - The maximum recursion depth.
 * @returns Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDeep}, {@link flatMapDepth}, {@link flattenDeep}
 * @example
 *
 * const iterable = [1, [2, [3, [4]], 5]]
 *
 * [...flattenDepth(iterable, 1)]
 * // => [1, 2, [3, [4]], 5]
 *
 * [...flattenDepth(iterable, 2)]
 * // => [1, 2, 3, [4], 5]
 */
export function* flattenDepth<T>(
  iterable: Iterable<T>,
  depth: number,
): Generator<T> {
  for (const it of iterable) {
    if (isIterable<T>(it) && depth > 0) {
      yield* flattenDepth<T>(it, depth - 1)
    } else {
      yield it
    }
  }
}
