import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {without} from '../without.mjs'

describe('without', () => {
  it('should return the difference of values', () => {
    assert.deepEqual([...without([2, 1, 2, 3], 1, 2)], [3])
  })

  it('should remove all occurrences of each value from an array', () => {
    assert.deepEqual([...without([1, 2, 3, 1, 2, 3], 1, 2)], [3, 3])
  })
})
