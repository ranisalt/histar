import {reduce} from './reduce.mjs'

/**
 * @overload
 * @param {Iterable<number>} iterable The iterable to iterate over.
 * @param {number} start The starting value.
 * @returns {number} Returns the sum.
 */

/**
 * @overload
 * @param {Iterable<bigint>} iterable The iterable to iterate over.
 * @param {bigint} start The starting value.
 * @returns {bigint} Returns the sum.
 */

/**
 * Computes the sum of the values in `iterable`.
 *
 * @param {Iterable<any>} iterable The iterable to iterate over.
 * @param {any} start The starting value.
 * @returns {any} Returns the sum.
 * @example
 *
 * sum([4, 2, 8, 6])
 * // => 20
 */
export function sum(iterable, start) {
  return reduce(iterable, (accumulator, value) => accumulator + value, start)
}
