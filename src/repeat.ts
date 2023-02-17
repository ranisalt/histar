import {times} from './times'

/**
 * Creates an iterable of `n` elements, where each element is `element`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param element The element to repeat.
 * @param n The number of times to repeat the element.
 * @returns Returns the iterable of repeated elements.
 * @example
 *
 * [...repeat('a', 3)]
 * // => ['a', 'a', 'a']
 */
export const repeat = <T>(
  element: T,
  n: number = Number.MAX_SAFE_INTEGER,
): Generator<T> => times(n, () => element)
