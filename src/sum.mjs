import {reduce} from './reduce.mjs'
/**
 * @overload
 * @param {Iterable<bigint>} iterable - The iterable to iterate over.
 * @returns {bigint | undefined} Returns the sum.
 */

/**
 * @overload
 * @param {Iterable<bigint>} iterable - The iterable to iterate over.
 * @param {bigint} start - The starting value.
 * @returns /
 *
 * /**{bigint} Returns the sum.
 *
 * @overload
 * @param {Iterable<number>} iterable - The iterable to iterate over.
 * @returns {number | undefined} Returns the sum.
 */

/**
 * @overload
 * @param {Iterable<number>} iterable - The iterable to iterate over.
 * @param {number} start - The starting value.
 * @returns {number} Returns the sum.
 */

/**
 * @overload
 * @param {Iterable<string>} iterable - The iterable to iterate over.
 * @returns {string | undefined} Returns the sum.
 */

/**
 * @overload
 * @param {Iterable<string>} iterable - The iterable to iterate over.
 * @param {string} start - The starting value.
 * @returns {string} Returns the sum.
 */

/**
 * Computes the sum of the values in `iterable`.
 *
 * @param {Iterable<bigint | number | string>} iterable - The iterable to iterate over.
 * @param {bigint | number | string} [start] - The starting value.
 * @returns {bigint | number | string | undefined} Returns the sum.
 * @example
 *
 * sum([4, 2, 8, 6])
 * // => 20
 */
export function sum(iterable, start) {
  return reduce(iterable, (accumulator, value) => accumulator + value, start)
}
