import {describe, expect, it} from 'vitest'
import {minBy} from '../min-by.mjs'

const array = [1, 3, -4, 2]

describe('minBy', () => {
  it('should take a key function', () => {
    expect(minBy(array, Math.abs)).toBe(1)
  })

  it.todo('should return undefined for empty arrays')

  it('should find the minimum value in a collection with a key function', () => {
    expect(minBy(array, Math.abs)).toBe(1)
  })
})
