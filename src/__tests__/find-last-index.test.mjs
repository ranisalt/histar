import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {findLastIndex} from '../find-last-index.mjs'
import {range} from '../range.mjs'

describe('findLastIndex', () => {
  it('should return the index of the last matched value', () => {
    assert.equal(
      findLastIndex(range(10, 20), (x) => x % 3 === 0),
      8,
    )
  })

  it('should return -1 if not found', () => {
    assert.equal(
      findLastIndex(range(10, 20), (x) => x < 3),
      -1,
    )
  })
})
