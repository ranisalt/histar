import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {indexOf} from '../index-of.mjs'

describe('indexOf', () => {
  it('should return the index of the first matched value', () => {
    assert.equal(indexOf([1, 2, 3, 1, 2, 3], 3), 2)
    assert.equal(indexOf('123123', '3'), 2)
  })
})
