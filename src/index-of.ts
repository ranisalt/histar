import {findIndex} from './find-index'

/**
 * Gets the index at which the first occurrence of `value` is found in
 * `iterable` using `===` for equality comparisons.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to inspect.
 * @param value - The value to search for.
 * @returns Returns the index of the matched value, else `-1`.
 * @example
 *
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 */
export const indexOf = <T>(iterable: Iterable<T>, value: T): number =>
  findIndex(iterable, (element) => element === value)
