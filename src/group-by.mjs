/**
 * Creates an iterator that groups consecutive elements of the given iterable.
 * The `predicate` is a function computing a key value for each element.
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the key computed by the predicate.
 * @param {Iterable<T>} iterable - The iterable to group.
 * @param {import("./types.mjs").UnaryPredicate<T, U>} predicate - The function to compute the key value for each element.
 * @yields {[U, T[]]} Returns each element of the iterable with the number of consecutive
 *   elements that are equal to it.
 * @returns {Generator<[U, T[]], void, unknown>}
 * @example
 *
 * [...groupBy([1, 1, 2, 2, 3, 3, 3, 4, 4, 5], (x) => x < 3)]
 * // => [[1, 7], [4, 3]]
 */
export function groupBy(iterable, predicate) {
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
      const key = predicate(value)
      const group = [value]

      current = iterator.next()
      while (!current.done && predicate(current.value) === key) {
        group.push(current.value)
        current = iterator.next()
      }

      return {value: [key, group], done: false}
    },
  }
}
