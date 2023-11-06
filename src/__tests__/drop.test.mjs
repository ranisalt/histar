import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {drop} from '../drop.mjs'

const array = [1, 2, 3]

describe('drop', () => {
  it('should drop the first two elements', () => {
    assert.deepEqual([...drop(array, 2)], [3])
  })

  it('should return all elements when `n` < `1`', () => {
    assert.deepEqual([...drop(array, 0)], [1, 2, 3])
    assert.deepEqual([...drop(array, -1)], [1, 2, 3])
    assert.deepEqual([...drop(array, Number.NEGATIVE_INFINITY)], [1, 2, 3])
  })

  it('should return an empty array when `n` >= `length`', () => {
    assert.deepEqual([...drop(array, 3)], [])
    assert.deepEqual([...drop(array, 4)], [])
    assert.deepEqual([...drop(array, 2 ** 32)], [])
    assert.deepEqual([...drop(array, Number.POSITIVE_INFINITY)], [])
  })
})
