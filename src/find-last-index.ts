export const findLastIndex = <T>(
  iterable: Iterable<T>,
  predicate: (element: T) => boolean,
): number => {
  let i = 0
  let lastIndex = -1
  for (const it of iterable) {
    if (predicate(it)) {
      lastIndex = i
    }

    ++i
  }

  return lastIndex
}

export const lastIndexOf = <T>(iterable: Iterable<T>, value: T): number =>
  findLastIndex(iterable, (element) => element === value)
