import {isIterable} from './utils'

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

/**
 * Recursively flattens `iterable`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to flatten.
 * @param iterable The iterable to flatten.
 * @returns Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDeep}, {@link flatMapDepth}, {@link flatten}, {@link flattenDepth}
 * @example
 *
 * [...flattenDeep([1, [2, [3, [4]], 5]])]
 * // => [1, 2, 3, 4, 5]
 */
export const flattenDeep = <T>(iterable: Iterable<T | Iterable<T>>) =>
  flattenDepth(iterable, Number.MAX_SAFE_INTEGER)

/**
 * Flattens `iterable` a single level deep.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to flatten.
 * @returns Returns the new flattened iterable.
 * @see {@link flatMap}, {@link flatMapDeep}, {@link flatMapDepth}, {@link flattenDeep}, {@link flattenDepth}
 * @example
 *
 * [...flatten([1, [2, [3, [4]], 5]])]
 * // => [1, 2, [3, [4]], 5]
 */
export const flatten = <T>(iterable: Iterable<T | Iterable<T>>) =>
  flattenDepth(iterable, 1)
