import {reduce} from './reduce.mjs'

/**
 * This method is like `min` except that it accepts `iteratee` which is invoked
 * for each element in `iterable` to generate the criterion by which the value
 * is ranked. The iteratee is invoked with one argument: (value).
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the elements returned by the iteratee.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @param {import('./types.mjs').UnaryPredicate<T, U>} iteratee The iteratee invoked per element.
 * @returns Returns the minimum value.
 * @example
 *
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 *
 * minBy(objects, ({ n }) => n)
 * // => { 'n': 1 }
 */
export function minBy(iterable, iteratee) {
  return reduce(iterable, (accumulator, value) =>
    iteratee(accumulator) > iteratee(value) ? value : accumulator
  )
}
