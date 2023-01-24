export function* dropWhile<T>(
  iterable: Iterable<T>,
  predicate: (element: T) => boolean,
): Generator<T> {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  while (!result.done && predicate(result.value)) {
    result = iterator.next()
  }

  while (!result.done) {
    yield result.value
    result = iterator.next()
  }
}

export const drop = <T>(iterable: Iterable<T>, n: number): Generator<T> =>
  dropWhile(iterable, () => n-- > 0)

export const tail = <T>(iterable: Iterable<T>): Generator<T> =>
  drop(iterable, 1)
