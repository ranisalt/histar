import {filter} from './filter'
import {indexOf} from './find-index'

export const without = <T>(iterable: Iterable<T>, ...values: T[]) =>
  filter(iterable, (element) => indexOf(values, element) === -1)
