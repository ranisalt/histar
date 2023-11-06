import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {take} from '../take.mjs'

describe('take', () => {
  it('should take the first two elements', () => {
    assert.deepEqual([...take([1, 2, 3], 2)], [1, 2])
  })

  it('should return an empty array when `n` < `1`', () => {
    assert.deepEqual([...take([1, 2, 3], 0)], [])
    assert.deepEqual([...take([1, 2, 3], -1)], [])
    assert.deepEqual([...take([1, 2, 3], Number.NEGATIVE_INFINITY)], [])
  })

  it('should return all elements when `n` >= `length`', () => {
    assert.deepEqual([...take([1, 2, 3], 3)], [1, 2, 3])
    assert.deepEqual([...take([1, 2, 3], 4)], [1, 2, 3])
    assert.deepEqual([...take([1, 2, 3], 2 ** 32)], [1, 2, 3])
    assert.deepEqual([...take([1, 2, 3], Number.POSITIVE_INFINITY)], [1, 2, 3])
  })
})
