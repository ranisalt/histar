import {reduce} from './reduce.mjs'

/**
 * This method is like `max` except that it accepts `predicate` which is invoked
 * for each element in `predicate` to generate the criterion by which the value
 * is ranked. The predicate is invoked with one argument: (value).
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the elements returned by the predicate.
 * @param {T} iterable - The iterable to iterate over.
 * @param {import('./types.mjs').UnaryPredicate<T, U>} predicate - The predicate invoked per element.
 * @returns {T | undefined} Returns the maximum value.
 * @example
 *
 * const objects = [{ 'n': 1 }, { 'n': 2 }]
 *
 * maxBy(objects, ({ n }) => n)
 * // => { 'n': 2 }
 */
export function maxBy(iterable, predicate) {
  return reduce(iterable, (accumulator, value) =>
    predicate(accumulator) < predicate(value) ? value : accumulator,
  )
}
