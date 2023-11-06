import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {groupBy} from '../group-by.mjs'

describe('groupBy', () => {
  it('should group values by `key`', () => {
    assert.deepEqual(
      [...groupBy([1.2, 2.1, 2.3], Math.floor)],
      [
        [1, [1.2]],
        [2, [2.1, 2.3]],
      ],
    )
  })
})
