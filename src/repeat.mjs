import {times} from './times.mjs'

/**
 * Creates an iterable of `n` elements, where each element is `element`.
 *
 * @template T - The type of the elements in the iterable.
 * @param {T} element The element to repeat.
 * @param {number} [n] The number of times to repeat the element.
 * @yields {T} Returns the iterable of repeated elements.
 * @example
 *
 * [...repeat('a', 3)]
 * // => ['a', 'a', 'a']
 */
export function repeat(element, n = Number.MAX_SAFE_INTEGER) {
  return times(n, () => element)
}
