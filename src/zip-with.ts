export function* zipWith<T, U, V>(
  iterable1: Iterable<T>,
  iterable2: Iterable<U>,
  iteratee: (a: T, b: U) => V,
): Generator<V> {
  const iterator1 = iterable1[Symbol.iterator]()
  const iterator2 = iterable2[Symbol.iterator]()

  let result1 = iterator1.next()
  let result2 = iterator2.next()

  while (!result1.done && !result2.done) {
    yield iteratee(result1.value, result2.value)
    result1 = iterator1.next()
    result2 = iterator2.next()
  }
}

export const zip = <T, U>(
  iterable1: Iterable<T>,
  iterable2: Iterable<U>,
): Generator<[T, U]> => zipWith(iterable1, iterable2, (a, b) => [a, b])
