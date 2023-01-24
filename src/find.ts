export const find = <T>(
  iterator: Iterator<T>,
  predicate: (element: T) => boolean,
): T | undefined => {
  let result = iterator.next()
  while (!result.done) {
    if (predicate(result.value)) {
      return result.value
    }

    result = iterator.next()
  }

  return undefined
}
