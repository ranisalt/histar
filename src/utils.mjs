/**
 * Checks that a value is an array-like object, i.e. has a length property with a valid number.
 *
 * @template T - The type of the elements in the array-like object.
 * @param object - The value to check.
 * @returns {asserts object is ArrayLike<T>} `true` if `object` is array-like, else `false`.
 */
export function isArrayLike(object) {
  return (
    object !== undefined &&
    object !== null &&
    typeof object !== 'function' &&
    typeof object.length === 'number' &&
    object.length >= 0 &&
    object.length <= Number.MAX_SAFE_INTEGER
  )
}

/**
 * Checks that a value is an iterable object, i.e. has a Symbol.iterator property.
 *
 * @template T - The type of the elements in the iterable.
 * @param object - The value to check.
 * @returns {asserts object is Iterable<T>} `true` if `object` is iterable, else `false`.
 */
export function isIterable(object) {
  return (
    object !== undefined &&
    object !== null &&
    typeof object[Symbol.iterator] === 'function'
  )
}

/**
 * Calculates the modulo of n by m, given that % in Javascript is remainder, not modulo.
 * Additionaly, make it work for d = +- Infinity, because that results in NaN.
 *
 * @param {number} n - The dividend.
 * @param {number} d - The divisor.
 * @returns {number} The modulo.
 */
export function modulo(n, d) {
  return Number.isFinite(d) ? ((n % d) + d) % d : n
}
