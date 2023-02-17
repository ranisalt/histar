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
