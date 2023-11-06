import {describe, expect, it} from 'vitest'
import {findLastIndex} from '../find-last-index.mjs'
import {range} from '../range.mjs'

describe('findLastIndex', () => {
  it('should return the index of the last matched value', () => {
    expect(findLastIndex(range(10, 20), (x) => x % 3 === 0)).toBe(8)
  })

  it('should return -1 if not found', () => {
    expect(findLastIndex(range(10, 20), (x) => x < 3)).toBe(-1)
  })
})
