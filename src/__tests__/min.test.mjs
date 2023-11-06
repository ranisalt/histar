import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {min} from '../min.mjs'

const array = [1, 3, -4, 2]

describe('min', () => {
  it('should find the minimum value in a collection', () => {
    assert.equal(min(array), -4)
  })

  it('should return undefined for empty arrays', () => {
    assert.equal(min([]), undefined)
  })
})
