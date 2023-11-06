import {describe, expect, it} from 'vitest'
import {compress} from '../compress.mjs'

describe('compress', () => {
  it('should return an array of elements corresponding to the true values in `selectors`', () => {
    expect([
      ...compress([1, 2, 3, 4, 5], [true, false, true, false, true]),
    ]).toEqual([1, 3, 5])
  })

  it('should return an empty array for empty `collection`', () => {
    expect([...compress([], [])]).toEqual([])
  })
})
