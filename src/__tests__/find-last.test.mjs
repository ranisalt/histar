import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {findLast} from '../find-last.mjs'
import {range} from '../range.mjs'

describe('findLast', () => {
  it('should find values in an iterable', () => {
    assert.equal(
      findLast(range(10, 20), (x) => x % 3 === 0),
      18,
    )
  })

  it('should return undefined if not found', () => {
    assert(findLast(range(10, 20), (x) => x < 3) === undefined)
  })
})
