import {drop} from './drop.mjs'
import {head} from './head.mjs'

/**
 * Gets the element at index `n` of `iterable`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @param n - The index of the element to return.
 * @returns Returns the nth element of `iterable`.
 * @example
 *
 * const iterable = ['a', 'b', 'c', 'd']
 *
 * nth(iterable, 1)
 * // => 'b'
 *
 * nth(iterable, -2)
 * // => 'c'
 */
export function nth<T>(iterable: Iterable<T>, n: number) {
  return head(drop(iterable, n))
}
