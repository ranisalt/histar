export const every = <T>(
  iterable: Iterable<T>,
  predicate: (element: T) => boolean,
): boolean => {
  for (const element of iterable) {
    if (!predicate(element)) {
      return false
    }
  }

  return true
}

export const all = every
