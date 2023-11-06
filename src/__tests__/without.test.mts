import {describe, expect, it} from 'vitest'
import {without} from '../without.mjs'

describe('without', () => {
  it('should return the difference of values', () => {
    expect([...without([2, 1, 2, 3], 1, 2)]).toEqual([3])
  })

  it('should remove all occurrences of each value from an array', () => {
    expect([...without([1, 2, 3, 1, 2, 3], 1, 2)]).toEqual([3, 3])
  })
})
