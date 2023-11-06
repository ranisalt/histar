import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {compress} from '../compress.mjs'

describe('compress', () => {
  it('should return an array of elements corresponding to the true values in `selectors`', () => {
    assert.deepEqual(
      [...compress([1, 2, 3, 4, 5], [true, false, true, false, true])],
      [1, 3, 5],
    )
  })

  it('should return an empty array for empty `collection`', () => {
    assert.deepEqual([...compress([], [])], [])
  })
})
