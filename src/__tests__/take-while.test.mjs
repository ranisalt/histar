import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {takeWhile} from '../take-while.mjs'

describe('takeWhile', () => {
  it('should take the first two elements', () => {
    assert.deepEqual([...takeWhile([1, 2, 3], (x) => x <= 2)], [1, 2])
  })

  it('should return an empty array when predicate always returns false', () => {
    assert.deepEqual([...takeWhile([1, 2, 3], () => false)], [])
  })

  it('should return all elements when predicate always returns true', () => {
    assert.deepEqual([...takeWhile([1, 2, 3], () => true)], [1, 2, 3])
  })
})
