export const last = <T>(iterable: Iterable<T>): T | undefined => {
  const iterator = iterable[Symbol.iterator]()

  let previousValue: T | undefined
  let result = iterator.next()

  while (!result.done) {
    previousValue = result.value
    result = iterator.next()
  }

  return previousValue
}
