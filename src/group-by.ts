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
 * [...groupBy([1, 1, 2, 2, 3, 3, 3, 4, 4, 5], (x) => x < 3)]
 * // => [[1, 7], [4, 3]]
 */
export const groupBy = <T, U>(
  iterable: Iterable<T>,
  /**
   * @param element - The element to compute the key value for.
   */
  iteratee: (element: T) => U,
): IterableIterator<[U, T[]]> => {
  const iterator = iterable[Symbol.iterator]()
  let current = iterator.next()

  return {
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (current.done) {
        return current
      }

      const {value} = current
      const key = iteratee(value)
      const group = [value]

      current = iterator.next()
      while (!current.done && iteratee(current.value) === key) {
        group.push(current.value)
        current = iterator.next()
      }

      return {value: [key, group], done: false}
    },
  }
}
