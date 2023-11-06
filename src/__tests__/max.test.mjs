import {describe, expect, it} from 'vitest'
import {max} from '../max.mjs'

const array = [1, 3, -4, 2]

describe('max', () => {
  it('should find the maximum value in a collection', () => {
    expect(max(array)).toBe(3)
  })

  it('should return undefined for empty arrays', () => {
    expect(max([])).toBeUndefined()
  })
})
