import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {rangeRight} from '../range-right.mjs'

describe('rangeRight', () => {
  it('should infer the sign of `step` when only `end` is given', () => {
    assert.deepEqual([...rangeRight(4)], [3, 2, 1, 0])
    assert.deepEqual([...rangeRight(-4)], [-3, -2, -1, 0])
  })

  it('should infer the sign of `step` when only `start` and `end` are given', () => {
    assert.deepEqual([...rangeRight(1, 5)], [4, 3, 2, 1])
    assert.deepEqual([...rangeRight(5, 1)], [2, 3, 4, 5])
  })

  it('should work with a `start`, `end`, and `step`', () => {
    assert.deepEqual([...rangeRight(0, -4, -1)], [-3, -2, -1, 0])
    assert.deepEqual([...rangeRight(5, 1, -1)], [2, 3, 4, 5])
    assert.deepEqual([...rangeRight(0, 20, 5)], [15, 10, 5, 0])
  })

  it('should work with a `step` larger than `end`', () => {
    assert.deepEqual([...rangeRight(1, 5, 20)], [1])
  })

  it('should work with a negative `step`', () => {
    assert.deepEqual([...rangeRight(0, -4, -1)], [-3, -2, -1, 0])
    assert.deepEqual([...rangeRight(21, 10, -3)], [12, 15, 18, 21])
  })
})
