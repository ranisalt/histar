import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {lastIndexOf} from '../last-index-of.mjs'

describe('lastIndexOf', () => {
  it('should return the index of the first matched value', () => {
    assert.equal(lastIndexOf([1, 2, 3, 1, 2, 3], 3), 5)
  })
})
