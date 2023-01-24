export function* fill<T, U>(
  iterable: Iterable<T>,
  value: U,
  start = 0,
  end = Number.MAX_SAFE_INTEGER,
): Generator<T | U> {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  for (let i = 0; i < start && !result.done; ++i) {
    yield result.value
    result = iterator.next()
  }

  for (let i = start; i < end && !result.done; ++i) {
    yield value
    result = iterator.next()
  }

  while (!result.done) {
    yield result.value
    result = iterator.next()
  }
}
