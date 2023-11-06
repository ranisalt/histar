import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {minBy} from '../min-by.mjs'

const array = [1, 3, -4, 2]

describe('minBy', () => {
  it('should take a key function', () => {
    assert.equal(minBy(array, Math.abs), 1)
  })

  it.todo('should return undefined for empty arrays')

  it('should find the minimum value in a collection with a key function', () => {
    assert.equal(minBy(array, Math.abs), 1)
  })
})
