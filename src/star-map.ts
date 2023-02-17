import {map} from './map'

/**
 * Creates an iterable that computes the function using arguments obtained from
 * the iterable. Used instead of `map` when argument parameters are already
 * grouped in tuples from a single iterable (when the data has been
 * "pre-zipped").
 *
 * @param iterable - The iterable to iterate over.
 * @param predicate - The function invoked per iteration.
 * @returns Returns the new mapped iterable.
 * @see {@link map} {@link zip}
 * @example
 */
export const starMap = <T, U>(
  iterable: Iterable<Iterable<T>>,
  /**
   * @param element - The current element.
   * @returns Returns the new mapped value.
   */
  predicate: (...args: T[]) => U,
): Generator<U> => map(iterable, (args) => predicate(...args))
