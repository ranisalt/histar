import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {range} from '../range.mjs'

describe('range', () => {
  it('should create an iterable of numbers', () => {
    assert.deepEqual([...range(10)], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    assert.deepEqual([...range(10, 15)], [10, 11, 12, 13, 14])
    assert.deepEqual([...range(10, 20, 3)], [10, 13, 16, 19])
  })

  it('should generate values on demand', () => {
    assert.doesNotThrow(() => {
      const r = range(Number.POSITIVE_INFINITY)
      assert.equal(r[0], 0)
    })
  })

  describe('should be an array-like object', () => {
    it('should have a length property', () => {
      assert.equal(range(10).length, 10)
      assert.equal(range(10, 15).length, 5)
      assert.equal(range(10, 20, 3).length, 4)
    })

    it('should work as a parameter to Array.from', () => {
      assert.doesNotThrow(() => [...range(10)])
    })
  })

  it('should adhere to the iterator protocol', () => {
    const r = range(10, 13)
    assert.deepEqual(r.next(), {value: 10, done: false})
    assert.deepEqual(r.next(), {value: 11, done: false})
    assert.deepEqual(r.next(), {value: 12, done: false})
    assert.deepEqual(r.next(), {value: undefined, done: true})
  })

  it('should infer the sign of `step` when only `end` is given', () => {
    assert.deepEqual([...range(4)], [0, 1, 2, 3])
    assert.deepEqual([...range(-4)], [0, -1, -2, -3])
  })

  it('should infer the sign of `step` when only `start` and `end` are given', () => {
    assert.deepEqual([...range(1, 5)], [1, 2, 3, 4])
    assert.deepEqual([...range(5, 1)], [5, 4, 3, 2])
  })

  it('should work with a `start`, `end`, and `step`', () => {
    assert.deepEqual([...range(0, -4, -1)], [0, -1, -2, -3])
    assert.deepEqual([...range(5, 1, -1)], [5, 4, 3, 2])
    assert.deepEqual([...range(0, 20, 5)], [0, 5, 10, 15])
  })

  it('should work with a `step` larger than `end`', () => {
    assert.deepEqual([...range(1, 5, 20)], [1])
  })

  it('should work with a negative `step`', () => {
    assert.deepEqual([...range(0, -4, -1)], [0, -1, -2, -3])
    assert.deepEqual([...range(21, 10, -3)], [21, 18, 15, 12])
  })

  it('should support `start` of `-0`', () => {
    const [actual] = range(-0, 1)

    assert.equal(1 / actual, Number.NEGATIVE_INFINITY)
  })

  it('should be indexable', () => {
    assert.equal(range(10)[2], 2)
    assert.equal(range(10, 15)[2], 12)
    assert.equal(range(10, 20, 3)[2], 16)
    assert.equal(range(Number.POSITIVE_INFINITY)[1e3], 1e3)
    assert.equal(range(Number.NEGATIVE_INFINITY)[1e3], -1e3)
  })

  it('should be indexable from the end', () => {
    assert.equal(range(10)[-2], 8)
    assert.equal(range(10, 15)[-2], 13)
    assert.equal(range(10, 20, 3)[-2], 16)
  })

  it('should not be indexable from the end when the range is infinite', () => {
    assert.equal(range(Number.POSITIVE_INFINITY)[-1e3], undefined)
    assert.equal(range(Number.NEGATIVE_INFINITY)[-1e3], undefined)
  })

  it('should be reversible', () => {
    assert.deepEqual([...range(10).reverse()], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
    assert.deepEqual([...range(10, 15).reverse()], [14, 13, 12, 11, 10])
    assert.deepEqual([...range(10, 20, 3).reverse()], [19, 16, 13, 10])
    assert.deepEqual([...range(-4).reverse()], [-3, -2, -1, 0])
  })
})
