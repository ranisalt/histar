import {isIterable} from './utils.mjs'

/**
 * Recursively flatten `iterable` up to `depth` times.
 *
 * @template T - The type of the elements in the iterable.
 * @param {Iterable<T | Iterable<T>>} iterable - The iterable to flatten.
 * @param {number} depth - The maximum recursion depth.
 * @yields {T} Returns the new flattened iterable.
 * @returns {Generator<T, void, unknown>}
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
export function* flattenDepth(iterable, depth) {
  for (const it of iterable) {
    if (isIterable(it) && depth > 0) {
      yield* flattenDepth(it, depth - 1)
    } else {
      yield it
    }
  }
}
