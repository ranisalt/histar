import {describe, expect, it} from 'vitest'
import {maxBy} from '../max-by.mjs'

const array = [1, 3, -4, 2]

describe('maxBy', () => {
  it('should take a key function', () => {
    expect(maxBy(array, Math.abs)).toBe(-4)
  })

  it.todo('should return undefined for empty arrays')

  it('should find the maximum value in a collection with a key function', () => {
    expect(maxBy(array, Math.abs)).toBe(-4)
  })
})
