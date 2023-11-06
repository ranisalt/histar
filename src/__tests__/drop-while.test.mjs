import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {dropWhile} from '../drop-while.mjs'

const array = [1, 2, 3]

describe('dropWhile', () => {
  it('should drop the first two elements', () => {
    assert.deepEqual([...dropWhile(array, (x) => x <= 2)], [3])
  })

  it('should return all elements when predicate always returns false', () => {
    assert.deepEqual([...dropWhile(array, () => false)], [1, 2, 3])
  })

  it('should return an empty array when predicate always returns true', () => {
    assert.deepEqual([...dropWhile(array, () => true)], [])
  })
})
