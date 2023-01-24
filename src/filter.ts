export function filter<T>(
  iterable: Iterable<T>,
  predicate: (element: T) => boolean,
): Generator<T>
export function filter<T, S extends T>(
  iterable: Iterable<T>,
  predicate: (element: T) => element is S,
): Generator<S>
export function* filter<T>(
  iterable: Iterable<T>,
  predicate: (element: T) => any,
): Generator<T> {
  for (const it of iterable) {
    if (predicate(it)) {
      yield it
    }
  }
}

export const compact = <T>(iterable: Iterable<T>): Generator<T> =>
  filter(iterable, Boolean)

export const reject = <T>(
  iterable: Iterable<T>,
  predicate: (element: T) => boolean,
): Generator<T> => filter(iterable, (element) => !predicate(element))
