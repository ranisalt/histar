import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {map} from '../map.mjs'

describe('map', () => {
  it('should map values in `collection` to a new array', () => {
    assert.deepEqual([...map([1, 2], String)], ['1', '2'])
  })
})
