export function reduce<T>(
  iterable: Iterable<T>,
  iteratee: (accumulator: T, value: T, index: number) => T,
  accumulator?: T,
): T
export function reduce<T, Result>(
  iterable: Iterable<T>,
  iteratee: (previousValue: Result, currentValue: T, index: number) => Result,
  initialValue: Result,
): Result {
  const iterator = iterable[Symbol.iterator]()

  let result = iterator.next()
  if (result.done) {
    return initialValue
  }

  let index = 0
  if (initialValue === undefined) {
    initialValue = result.value as unknown as Result
    index++
    result = iterator.next()
  }

  while (!result.done) {
    initialValue = iteratee(initialValue, result.value, index++)
    result = iterator.next()
  }

  return initialValue
}
