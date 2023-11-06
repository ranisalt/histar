import {describe, expect, it} from 'vitest'
import {findIndex} from '../find-index.mjs'
import {range} from '../range.mjs'

describe('findIndex', () => {
  it('should find indices in an iterable', () => {
    expect(findIndex(range(10, 20), (x) => x % 3 === 0)).toBe(2)
  })

  it('should return -1 if not found', () => {
    expect(findIndex(range(10, 20), (x) => x < 3)).toBe(-1)
  })
})
