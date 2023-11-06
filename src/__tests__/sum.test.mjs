import {describe, expect, it} from 'vitest'
import {sum} from '../sum.mjs'

const array = [1, 2, 3, 4]

describe('sum', () => {
  it('should find the sum of values in a collection', () => {
    expect(sum(array)).toBe(10)
  })

  it('should return undefined for empty arrays', () => {
    expect(sum([])).toBeUndefined()
  })

  it('should include start in the sum', () => {
    expect(sum(array, 10)).toBe(20)
  })
})
