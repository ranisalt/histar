import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {findIndex} from '../find-index.mjs'
import {range} from '../range.mjs'

describe('findIndex', () => {
  it('should find indices in an iterable', () => {
    assert.equal(
      findIndex(range(10, 20), (x) => x % 3 === 0),
      2,
    )
  })

  it('should return -1 if not found', () => {
    assert.equal(
      findIndex(range(10, 20), (x) => x < 3),
      -1,
    )
  })
})
