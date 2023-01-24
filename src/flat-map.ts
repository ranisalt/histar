import {flatten} from './flatten'
import {map} from './map'

export const flatMap = <T, U>(
  iterable: Iterable<T>,
  predicate: (element: T) => U,
  depth = 1,
) => flatten(map(iterable, predicate), depth)

export const flatMapDeep = <T, U>(
  iterable: Iterable<T>,
  predicate: (element: T) => U,
) => flatMap(iterable, predicate, Number.POSITIVE_INFINITY)

export const flatMapDepth = <T, U>(
  iterable: Iterable<T>,
  predicate: (element: T) => U,
  depth: number,
) => flatMap(iterable, predicate, depth)
