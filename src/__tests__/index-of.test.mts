import {describe, expect, it} from 'vitest'
import {indexOf} from '../index-of.mjs'

describe('indexOf', () => {
  it('should return the index of the first matched value', () => {
    expect(indexOf([1, 2, 3, 1, 2, 3], 3)).toBe(2)
    expect(indexOf('123123', '3')).toBe(2)
  })
})
