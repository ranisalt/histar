import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {maxBy} from '../max-by.mjs'

const array = [1, 3, -4, 2]

describe('maxBy', () => {
  it('should take a key function', () => {
    assert.equal(maxBy(array, Math.abs), -4)
  })

  it.todo('should return undefined for empty arrays')

  it('should find the maximum value in a collection with a key function', () => {
    assert.equal(maxBy(array, Math.abs), -4)
  })
})
