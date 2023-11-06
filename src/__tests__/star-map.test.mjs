import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {chunk} from '../chunk.mjs'
import {starMap} from '../star-map.mjs'

describe('starMap', () => {
  it("should map values in 'collection' to a new array", () => {
    assert.deepEqual(
      [...starMap(chunk([1, 2, 3, 4], 2), (a, b) => `${a},${b}`)],
      ['1,2', '3,4'],
    )
  })
})
