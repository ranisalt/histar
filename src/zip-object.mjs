import {reduce} from './reduce.mjs'
import {zip} from './zip.mjs'

/**
 * Creates an object composed from arrays of keys and values. Provide two
 * iterables, one of property identifiers and one of corresponding values.
 *
 * @template {string | number | symbol} T The type of the keys in the record.
 * @template U The type of the values in the record.
 * @param {Iterable<T>} keys
 * @param {Iterable<U>} values
 * @returns {Record<T, U>}
 * @example
 * zipObject(['a', 'b'], range(1, 3));
 * // => { 'a': 1, 'b': 2 }
 */
export function zipObject(keys, values) {
  return reduce(
    zip(keys, values),
    (accumulator, [key, value]) => {
      accumulator[key] = value
      return accumulator
    },
    /** @type {Record<T, U>} */ ({}),
  )
}
