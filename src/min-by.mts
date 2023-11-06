import {reduce} from './reduce.mjs'

/**
 * This method is like `min` except that it accepts `iteratee` which is invoked
 * for each element in `iterable` to generate the criterion by which the value
 * is ranked. The iteratee is invoked with one argument: (value).
 *
 * @typeParam T - The type of the elements in the iterable.
 * @typeParam U - The type of the elements returned by the iteratee.
 * @param iterable - The iterable to iterate over.
 * @param iteratee The iteratee invoked per element.
 * @returns Returns the minimum value.
 * @example
 *
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 *
 * minBy(objects, ({ n }) => n)
 * // => { 'n': 1 }
 */
export function minBy<T, U>(
  iterable: Iterable<T>,
  /**
   * @param element The current element.
   * @returns Returns the criterion by which the value is ranked.
   */
  iteratee: (element: T) => U,
) {
  return reduce(iterable, (accumulator, value) =>
    iteratee(accumulator) > iteratee(value) ? value : accumulator,
  )
}
