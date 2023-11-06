import {map} from './map.mjs'

/**
 * Creates an iterable that computes the function using arguments obtained from
 * the iterable. Used instead of `map` when argument parameters are already
 * grouped in tuples from a single iterable (when the data has been
 * "pre-zipped").
 *
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the elements returned by the predicate.
 * @param {Iterable<T[]>} iterable - The iterable to iterate over.
 * @param {StarMapPredicate<T, U>} predicate - The function invoked per iteration.
 * @yields Returns the new mapped iterable.
 * @see {@link map} {@link zip}
 * @example
 */
export function starMap(iterable, predicate) {
  return map(iterable, (args) => predicate(...args))
}

/**
 * @template T - The type of the elements in the iterable.
 * @template U - The type of the elements returned by the predicate.
 * @callback StarMapPredicate
 * @param {...T} args - The arguments to pass to the predicate.
 * @returns {U} Returns the new mapped value.
 */
