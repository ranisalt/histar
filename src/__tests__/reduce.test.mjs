import {describe, expect, it} from 'vitest'
import {reduce} from '../reduce.mjs'

const array = [1, 2, 3]

describe('reduce', () => {
  it('should use the first element of a collection as the default `accumulator`', () => {
    expect(reduce(array, (x) => x)).toBe(1)
  })

  it('should return initial value for empty arrays', () => {
    expect(reduce([], (x) => x)).toBeUndefined()
  })

  it('should provide correct `iteratee` arguments when iterating an array', () => {
    let args

    reduce(
      array,
      (...iterArgs) => {
        args ||= iterArgs
        return 0
      },
      0
    )

    expect(args).toEqual([0, 1])

    args = undefined
    reduce(array, (...iterArgs) => {
      args ||= iterArgs
      return iterArgs[0]
    })

    expect(args).toEqual([1, 2])
  })
})
