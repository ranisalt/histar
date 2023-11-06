import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {max} from '../max.mjs'

const array = [1, 3, -4, 2]

describe('max', () => {
  it('should find the maximum value in a collection', () => {
    assert.equal(max(array), 3)
  })

  it('should return undefined for empty arrays', () => {
    assert.equal(max([]), undefined)
  })
})
