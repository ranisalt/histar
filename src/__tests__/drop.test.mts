import {describe, expect, it} from 'vitest'
import {drop} from '../drop.mjs'

const array = [1, 2, 3]

describe('drop', () => {
  it('should drop the first two elements', () => {
    expect([...drop(array, 2)]).toEqual([3])
  })

  it('should return all elements when `n` < `1`', () => {
    expect([...drop(array, 0)]).toEqual([1, 2, 3])
    expect([...drop(array, -1)]).toEqual([1, 2, 3])
    expect([...drop(array, Number.NEGATIVE_INFINITY)]).toEqual([1, 2, 3])
  })

  it('should return an empty array when `n` >= `length`', () => {
    expect([...drop(array, 3)]).toEqual([])
    expect([...drop(array, 4)]).toEqual([])
    expect([...drop(array, 2 ** 32)]).toEqual([])
    expect([...drop(array, Number.POSITIVE_INFINITY)]).toEqual([])
  })
})
