import {describe, expect, it} from 'vitest'
import {lastIndexOf} from '../last-index-of.mjs'

describe('lastIndexOf', () => {
  it('should return the index of the first matched value', () => {
    expect(lastIndexOf([1, 2, 3, 1, 2, 3], 3)).toBe(5)
  })
})
