import {isIterable} from './utils'

export function* flatten<T>(iterable: Iterable<T>, depth = 1): Generator<T> {
  for (const it of iterable) {
    if (isIterable<T>(it) && depth > 0) {
      yield* flatten<T>(it, depth - 1)
    } else {
      yield it
    }
  }
}

export const flattenDeep = <T>(iterable: Iterable<T | Iterable<T>>) =>
  flatten(iterable, Number.POSITIVE_INFINITY)

export const flattenDepth = <T>(
  iterable: Iterable<T | Iterable<T>>,
  depth: number,
) => flatten(iterable, depth)
