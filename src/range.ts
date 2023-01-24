import {modulo} from './utils'

export type Range = ArrayLike<number> &
  Iterable<number> &
  Iterator<number> & {
    readonly start: number
    readonly end: number
    readonly step: number
    reverse(): Range
  }

// Export function range(end: number): Range;
// export function range(start: number, end: number, step?: number): Range;
export function range(start: number, end?: number, step?: number): Range {
  const start_ = end === undefined ? 0 : start
  const end_ = end ?? start
  const step_ = step ?? Math.sign(end_ - start_)

  let currentValue = start_

  return new Proxy(
    {
      start: start_,
      end: end_,
      step: step_,

      // ArrayLike
      length: Math.ceil((end_ - start_) / step_),

      reverse(): Range {
        const end = start_ + step_ * (this.length - 1)
        return range(end, start_ - step_, -step_)
      },

      // Iterable
      [Symbol.iterator](): Iterator<number> {
        return this
      },

      // Iterator
      next(): IteratorResult<number> {
        const value = currentValue
        const done = step_ < 0 ? value <= end_ : value >= end_
        currentValue += step_
        return done ? {value: undefined, done} : {value, done}
      },
    },

    {
      get(target, name) {
        if (typeof name === 'string') {
          const asNumber = Number(name)
          if (
            Number.isSafeInteger(asNumber) &&
            (asNumber >= 0 || Number.isFinite(target.length))
          ) {
            return modulo(asNumber, target.length) * target.step + target.start
          }
        }

        return target[name as keyof typeof target]
      },
    },
  )
}

export const rangeRight = (start: number, end?: number, step?: number) =>
  range(start, end, step).reverse()
