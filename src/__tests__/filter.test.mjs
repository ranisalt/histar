import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {filter} from '../filter.mjs'

const array = [1, 2, 3, 4, 5]

describe('filter', () => {
  it('should return elements `predicate` returns truthy for', () => {
    assert.deepEqual([...filter(array, (n) => n % 2 === 0)], [2, 4])
  })

  it('should return an empty array when predicate always returns false', () => {
    assert.deepEqual([...filter(array, () => false)], [])
  })

  it('should return all elements when predicate always returns true', () => {
    assert.deepEqual([...filter(array, () => true)], [1, 2, 3, 4, 5])
  })
})
