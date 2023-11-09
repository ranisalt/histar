import assert from 'node:assert/strict'
import {describe, it, mock} from 'node:test'
import {chunkBy} from '../chunk-by.mjs'

const array = [1, 2, 2, 3, 4, 4, 6, 7, 7]

describe('chunk', () => {
  it('should return chunked iterable using predicate', () => {
    assert.deepEqual(
      [...chunkBy(array, (element) => element % 2)],
      [[1], [2, 2], [3], [4, 4, 6], [7, 7]],
    )
  })

  it('should not invoke predicate on empty iterable', () => {
    const predicate = mock.fn()

    assert.deepEqual([...chunkBy([], predicate)], [])
    assert.equal(predicate.mock.calls.length, 0)
  })
})
