import {reduce} from './reduce'

export const min: {
  <T>(iterable: Iterable<T>): T
  <T, U>(iterable: Iterable<T>, key: (element: T) => U): T
} = <T, U>(iterable: Iterable<T>, key?: (element: T) => U): T => {
  const iteratee = key ?? ((x: T): T => x)
  return reduce<T>(iterable, (accumulator, value) =>
    iteratee(accumulator) > iteratee(value) ? value : accumulator,
  )
}

// Lodash has separate functions min and minBy, but here they could be merged
export const minBy = min
