export const findIndex = <T>(
  iterable: Iterable<T>,
  predicate: (element: T) => boolean,
): number => {
  let i = 0
  for (const it of iterable) {
    if (predicate(it)) {
      return i
    }

    ++i
  }

  return -1
}

export const indexOf = <T>(iterable: Iterable<T>, value: T): number =>
  findIndex(iterable, (element) => element === value)

export const includes = <T>(iterable: Iterable<T>, value: T): boolean =>
  indexOf(iterable, value) !== -1
