export function* takeWhile<T>(
  iterable: Iterable<T>,
  predicate: (element: T) => boolean,
): Generator<T> {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  while (!result.done && predicate(result.value)) {
    yield result.value
    result = iterator.next()
  }
}

export const take = <T>(iterable: Iterable<T>, n: number) =>
  takeWhile(iterable, () => n-- > 0)
