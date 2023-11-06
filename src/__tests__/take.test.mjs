import {describe, expect, it} from 'vitest'
import {take} from '../take.mjs'

describe('take', () => {
  it('should take the first two elements', () => {
    expect([...take([1, 2, 3], 2)]).toEqual([1, 2])
  })

  it('should return an empty array when `n` < `1`', () => {
    expect([...take([1, 2, 3], 0)]).toEqual([])
    expect([...take([1, 2, 3], -1)]).toEqual([])
    expect([...take([1, 2, 3], Number.NEGATIVE_INFINITY)]).toEqual([])
  })

  it('should return all elements when `n` >= `length`', () => {
    expect([...take([1, 2, 3], 3)]).toEqual([1, 2, 3])
    expect([...take([1, 2, 3], 4)]).toEqual([1, 2, 3])
    expect([...take([1, 2, 3], 2 ** 32)]).toEqual([1, 2, 3])
    expect([...take([1, 2, 3], Number.POSITIVE_INFINITY)]).toEqual([1, 2, 3])
  })
})
