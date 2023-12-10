/**
 * @template T
 * @template U
 * @callback UnaryPredicate
 * @param {T} element The current element.
 * @returns {U} Returns the criterion by which the value is ranked.
 */

/**
 * @template T
 * @template U
 * @callback Reducer
 * @param {T} accumulator The current element.
 * @param {U} value The index of the current element.
 * @returns {T}
 */

/**
 * @template T
 * @template {T} U extends U
 * @callback NarrowingPredicate
 * @param {T} element The current element.
 * @returns {element is U}
 */
