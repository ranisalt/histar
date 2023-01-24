export function* initial<T>(iterable: Iterable<T>): Generator<T> {
  const iterator = iterable[Symbol.iterator]()

  let previousResult = iterator.next()
  if (previousResult.done) {
    return
  }

  let result = iterator.next()
  while (!result.done) {
    yield previousResult.value
    previousResult = result
    result = iterator.next()
  }
}
