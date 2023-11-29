import {generate} from './generate.mjs'

/**
 * This method is like `zip` except that it accepts `predicate` to specify how
 * grouped values should be combined. The predicate is invoked with the elements
 * of each group: (...group).
 *
 * @template T The type of the elements in the first iterable.
 * @template U The type of the elements in the second iterable.
 * @template V The type of the elements in the result iterable.
 * @param {Iterable<T>} iterable1 First array to process.
 * @param {Iterable<U>} iterable2 Second array to process.
 * @param {ZipWithPredicate<T, U, V>} predicate The function to combine grouped values.
 * @yields {V} Returns the new array of grouped elements.
 * @see {@link zip}
 * @example
 *
 * [...zipWith([1, 2], [10, 20], (a, b) => a + b)]
 * // => [11, 22]
 */
export function* zipWith(iterable1, iterable2, predicate) {
  const iterator1 = generate(iterable1)
  const iterator2 = generate(iterable2)

  let result1 = iterator1.next()
  let result2 = iterator2.next()

  while (!result1.done && !result2.done) {
    yield predicate(result1.value, result2.value)
    result1 = iterator1.next()
    result2 = iterator2.next()
  }
}

/**
 * @template T The type of the elements in the first iterable.
 * @template U - The type of the elements in the second iterable.
 * @template V - The type of the elements in the result iterable.
 * @callback ZipWithPredicate
 * @param {T} a - The first element of the group.
 * @param {U} b - The second element of the group.
 * @returns {V} Returns the new value of the group.
 */
