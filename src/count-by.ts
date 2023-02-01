import {reduce} from './reduce'

/**
 * Creates an iterator that groups consecutive elements of the given iterable.
 * The `iteratee` is a function computing a key value for each element.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to group.
 * @param iteratee - The function to compute the key value for each element.
 * @returns Returns each element of the iterable with the number of consecutive
 *   elements that are equal to it.
 * @example
 *
 * countBy([1, 1, 2, 2, 3, 3, 3, 4, 4, 5], (x) => x < 3)
 * // => { false: 7, true: 3 }
 */
export const countBy = <T, U extends keyof any>(
  iterable: Iterable<T>,
  /**
   * @param element - The element to compute the key value for.
   */
  iteratee: (element: T) => U,
): Record<U, number> =>
  reduce(
    iterable,
    (accumulator, element) => {
      const key = iteratee(element)
      return {...accumulator, [key]: (accumulator[key] ?? 0) + 1}
    },
    {} as Record<U, number>,
  )

/**
 * Creates an iterator that groups consecutive elements of the given iterable.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to group.
 * @returns Returns each element of the iterable with the number of consecutive
 *   elements that are equal to it.
 * @example
 *
 * count([1, 1, 2, 3, 3, 3, 4, 4, 5])
 * // => [[1, 2], [2, 1], [3, 3], [4, 2], [5, 1]]
 */
export const count = <T extends keyof any>(
  iterable: Iterable<T>,
): Record<T, number> => countBy(iterable, (x) => x)
