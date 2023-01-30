/**
 * This method is like `zip` except that it accepts `iteratee` to specify how
 * grouped values should be combined. The iteratee is invoked with the elements
 * of each group: (...group).
 *
 * @typeParam T - The type of the elements in the first iterable.
 * @typeParam U - The type of the elements in the second iterable.
 * @typeParam V - The type of the elements in the result iterable.
 * @param iterable1 - First array to process.
 * @param iterable2 - Second array to process.
 * @param iteratee - The function to combine grouped values.
 * @returns Returns the new array of grouped elements.
 * @see {@link zip}
 * @example
 *
 * [...zipWith([1, 2], [10, 20], (a, b) => a + b)]
 * // => [11, 22]
 */
export function* zipWith<T, U, V>(
  iterable1: Iterable<T>,
  iterable2: Iterable<U>,
  /**
   * @param a - The first element of the group.
   * @param b - The second element of the group.
   * @returns Returns the new value of the group.
   */
  iteratee: (a: T, b: U) => V,
): Generator<V> {
  const iterator1 = iterable1[Symbol.iterator]()
  const iterator2 = iterable2[Symbol.iterator]()

  let result1 = iterator1.next()
  let result2 = iterator2.next()

  while (!result1.done && !result2.done) {
    yield iteratee(result1.value, result2.value)
    result1 = iterator1.next()
    result2 = iterator2.next()
  }
}

/**
 * Creates an array of grouped elements, the first of which contains the first
 * elements of the given arrays, the second of which contains the second
 * elements of the given arrays, and so on.
 *
 * @typeParam T - The type of the elements in the first iterable.
 * @typeParam U - The type of the elements in the second iterable.
 * @param iterable1 - First array to process.
 * @param iterable2 - Second array to process.
 * @returns Returns the new array of grouped elements.
 * @see {@link zipWith}
 * @example
 *
 * [...zip(['a', 'b'], [1, 2])]
 * // => [['a', 1], ['b', 2]]
 */
export const zip = <T, U>(
  iterable1: Iterable<T>,
  iterable2: Iterable<U>,
): Generator<[T, U]> => zipWith(iterable1, iterable2, (a, b) => [a, b])
