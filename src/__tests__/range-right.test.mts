import {describe, expect, it} from 'vitest'
import {rangeRight} from '../range-right.mjs'

describe('rangeRight', () => {
  it('should infer the sign of `step` when only `end` is given', () => {
    expect([...rangeRight(4)]).toEqual([3, 2, 1, 0])
    expect([...rangeRight(-4)]).toEqual([-3, -2, -1, 0])
  })

  it('should infer the sign of `step` when only `start` and `end` are given', () => {
    expect([...rangeRight(1, 5)]).toEqual([4, 3, 2, 1])
    expect([...rangeRight(5, 1)]).toEqual([2, 3, 4, 5])
  })

  it('should work with a `start`, `end`, and `step`', () => {
    expect([...rangeRight(0, -4, -1)]).toEqual([-3, -2, -1, 0])
    expect([...rangeRight(5, 1, -1)]).toEqual([2, 3, 4, 5])
    expect([...rangeRight(0, 20, 5)]).toEqual([15, 10, 5, 0])
  })

  it('should work with a `step` larger than `end`', () => {
    expect([...rangeRight(1, 5, 20)]).toEqual([1])
  })

  it('should work with a negative `step`', () => {
    expect([...rangeRight(0, -4, -1)]).toEqual([-3, -2, -1, 0])
    expect([...rangeRight(21, 10, -3)]).toEqual([12, 15, 18, 21])
  })
})
