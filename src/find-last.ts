export const findLast = <T>(
  iterable: Iterable<T>,
  predicate: (element: T) => boolean,
): T | undefined => {
  let lastResult: T | undefined
  for (const it of iterable) {
    if (predicate(it)) {
      lastResult = it
    }
  }

  return lastResult
}
