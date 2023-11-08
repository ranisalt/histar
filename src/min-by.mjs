import {reduce} from './reduce.mjs'

/**
 * This method is like `min` except that it accepts `predicate` which is
 * invoked for each element in `iterable` to generate the criterion by which
 * the value is ranked. The predicate is invoked with one argument: (value).
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the elements returned by the predicate.
 * @param {Iterable<T>} iterable - The iterable to iterate over.
 * @param {import('./types.mjs').UnaryPredicate<T, U>} predicate The predicate invoked per element.
 * @returns {T | undefined} Returns the minimum value.
 * @example
 *
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 *
 * minBy(objects, ({ n }) => n)
 * // => { 'n': 1 }
 */
export function minBy(iterable, predicate) {
  return reduce(iterable, (accumulator, value) =>
    predicate(accumulator) > predicate(value) ? value : accumulator,
  )
}
