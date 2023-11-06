import {describe, expect, it} from 'vitest'
import {find} from '../find.mjs'
import {range} from '../range.mjs'

describe('find', () => {
  it('should find values in an iterable', () => {
    expect(find(range(10, 20), (x) => x % 3 === 0)).toBe(12)
  })

  it('should return undefined if not found', () => {
    expect(find(range(10, 20), (x) => x < 3)).toBeUndefined()
  })
})
