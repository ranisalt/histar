import {filter} from './filter.mjs'
import {map} from './map.mjs'
import {zip} from './zip.mjs'

/**
 * Creates an iterator that filters elements from `iterable` returning only
 * those that have a corresponding element in `selectors` that evaluates to
 * true. Stops when either `iterable` or `selectors` have been exhausted.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to iterate over.
 * @param selectors - The selectors to filter with.
 * @returns Returns the new mapped iterable.
 * @example
 *
 * [...compress([1, 2, 3, 4, 5], [true, false, true, false, true])]
 * // => [1, 3, 5]
 */
export function compress<T>(
  iterable: Iterable<T>,
  selectors: Iterable<boolean>,
) {
  return map(
    filter(zip(iterable, selectors), ([, selector]) => selector),
    ([element]) => element,
  )
}
