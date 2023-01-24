import {range} from './range'
import {zip} from './zip-with'

export const enumerate = <T>(
  iterable: Iterable<T>,
  start = 0,
): Iterable<[number, T]> =>
  zip(range(start, Number.POSITIVE_INFINITY), iterable)
