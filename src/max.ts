import {reduce} from './reduce'

/**
 * This method is like `max` except that it accepts `iteratee` which is invoked
 * for each element in `iteratee` to generate the criterion by which the value
 * is ranked. The iteratee is invoked with one argument: (value).
 *
 * @typeParam T - The type of the elements in the iterable.
 * @typeParam U - The type of the elements returned by the iteratee.
 * @param iteratee - The iteratee to iterate over.
 * @param iteratee - The iteratee invoked per element.
 * @returns Returns the maximum value.
 * @example
 *
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 *
 * maxBy(objects, ({ n }) => n)
 * // => { 'n': 2 }
 */
export const maxBy = <T, U>(
  iterable: Iterable<T>,
  /**
   * @param element - The current element.
   * @returns Returns the criterion by which the value is ranked.
   */
  iteratee: (element: T) => U,
): T =>
  reduce<T>(iterable, (accumulator, value) =>
    iteratee(accumulator) < iteratee(value) ? value : accumulator,
  )

/**
 * Computes the maximum value of `iteratee`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to iterate over.
 * @returns Returns the maximum value.
 * @example
 *
 * max([4, 2, 8, 6])
 * // => 8
 */
export const max = <T>(iterable: Iterable<T>): T => maxBy(iterable, (x) => x)
