import {map} from './map'
import {range} from './range'

export const times = <T>(
  n: number,
  iteratee: (element: number) => T,
): Generator<T> => map(range(n), (element) => iteratee(element))
