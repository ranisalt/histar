import {describe, expect, it} from 'vitest'
import {min} from '../min.mjs'

const array = [1, 3, -4, 2]

describe('min', () => {
  it('min#should find the minimum value in a collection', () => {
    expect(min(array)).toBe(-4)
  })

  it('min#should return undefined for empty arrays', () => {
    expect(min<unknown>([])).toBeUndefined()
  })
})
