import {drop} from './drop-while'
import {head} from './head'

export const nth = <T>(iterable: Iterable<T>, n: number): T | undefined =>
  head(drop(iterable, n))
