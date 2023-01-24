export function* map<T, U = T>(
  iterable: Iterable<T>,
  predicate: (element: T, index: number) => U,
): Generator<U> {
  let i = 0
  for (const it of iterable) {
    yield predicate(it, i++)
  }
}
