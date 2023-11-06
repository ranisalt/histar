import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {sum} from '../sum.mjs'

const array = [1, 2, 3, 4]

describe('sum', () => {
  it('should find the sum of values in a collection', () => {
    assert.equal(sum(array), 10)
  })

  it('should return undefined for empty arrays', () => {
    assert.equal(sum([]), undefined)
  })

  it('should include start in the sum', () => {
    assert.equal(sum(array, 10), 20)
  })
})
