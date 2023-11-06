import {describe, expect, it} from 'vitest'
import {findLast} from '../find-last.mjs'
import {range} from '../range.mjs'

describe('findLast', () => {
  it('should find values in an iterable', () => {
    expect(findLast(range(10, 20), (x) => x % 3 === 0)).toBe(18)
  })

  it('should return undefined if not found', () => {
    expect(findLast(range(10, 20), (x) => x < 3)).toBeUndefined()
  })
})
