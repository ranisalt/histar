export const some = <T>(
  iterable: Iterable<T>,
  predicate: (element: T) => boolean,
): boolean => {
  for (const element of iterable) {
    if (predicate(element)) {
      return true
    }
  }

  return false
}

export const any = some
