import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {chunk} from '../chunk.mjs'

const array = [0, 1, 2, 3, 4, 5]

describe('chunk', () => {
  it('should return chunked arrays', () => {
    assert.deepEqual(
      [...chunk(array, 3)],
      [
        [0, 1, 2],
        [3, 4, 5],
      ],
    )
  })

  it('should return the last chunk as remaining elements', () => {
    assert.deepEqual(
      [...chunk(array, 4)],
      [
        [0, 1, 2, 3],
        [4, 5],
      ],
    )
  })
})
