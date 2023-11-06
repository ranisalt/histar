/**
 * Gets the first element of `iterable`.
 *
 * @typeParam T - The type of the elements in the iterable.
 * @param iterable - The iterable to query.
 * @returns Returns the first element of `iterable`.
 * @see {@link last}
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
export function head<T>(iterable: Iterable<T>) {
  return iterable[Symbol.iterator]().next().value as T | undefined
}

export const first = head
