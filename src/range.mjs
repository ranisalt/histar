import {modulo} from './utils.mjs'

/**
 * @typedef {object} RangeProps
 * @property {number} start
 * @property {number} end
 * @property {number} step
 * @property {Reverse} reverse
 */

/**
 * @callback Reverse
 * @returns {Range}
 */

/**
 * @typedef {RangeProps & ArrayLike<number> & IterableIterator<number>} Range
 */

/**
 * Creates an iterable of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start`, and `start` is then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @param {number} start - The start of the range.
 * @param {number} [end] - The end of the range. If `end` is not specified, it's set to
 *   `start`, and `start` is then set to `0`.
 * @param {number} [step] - The value to increment or decrement by. If `step` is not
 *   specified, it's set to `1` if `start` is less than `end`, otherwise `-1`.
 * @returns {Range} Returns the range of numbers.
 * @see {@link rangeRight}
 * @example
 *
 * [...range(4)]
 * // => [0, 1, 2, 3]
 *
 * [...range(-4)]
 * // => [0, -1, -2, -3]
 *
 * [...range(1, 5)]
 * // => [1, 2, 3, 4]
 *
 * [...range(0, 20, 5)]
 * // => [0, 5, 10, 15]
 *
 * [...range(0, -4, -1)]
 * // => [0, -1, -2, -3]
 *
 * [...range(1, 4, 0)]
 * // => [1, 1, 1]
 *
 * [...range(0)]
 * // => []
 */
export function range(start, end, step) {
  const start_ = end === undefined ? 0 : start
  const end_ = end ?? start
  const step_ = step ?? Math.sign(end_ - start_)

  let currentValue = start_

  return new Proxy(
    {
      start: start_,
      end: end_,
      step: step_,

      // ArrayLike
      length: Math.ceil((end_ - start_) / step_),

      reverse() {
        const end = start_ + step_ * (this.length - 1)
        return range(end, start_ - step_, -step_)
      },

      // Iterable
      [Symbol.iterator]() {
        return this
      },

      // Iterator
      next() {
        const value = currentValue
        const done = step_ < 0 ? value <= end_ : value >= end_
        currentValue += step_
        return done ? {value: undefined, done} : {value, done}
      },
    },

    {
      get(target, name) {
        if (typeof name === 'string') {
          const asNumber = Number(name)
          if (
            Number.isSafeInteger(asNumber) &&
            (asNumber >= 0 || Number.isFinite(target.length))
          ) {
            return modulo(asNumber, target.length) * target.step + target.start
          }
        }

        return target[name]
      },
    },
  )
}
