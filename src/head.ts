export const head = <T>(iterable: Iterable<T>): T | undefined =>
  iterable[Symbol.iterator]().next().value as T | undefined

export const first = head
