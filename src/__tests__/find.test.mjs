import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {find} from '../find.mjs'
import {range} from '../range.mjs'

describe('find', () => {
  it('should find values in an iterable', () => {
    assert.equal(
      find(range(10, 20), (x) => x % 3 === 0),
      12,
    )
  })

  it('should return undefined if not found', () => {
    assert.equal(
      find(range(10, 20), (x) => x < 3),
      undefined,
    )
  })
})
