import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {map} from '../map.mjs'
import {uniq} from '../uniq.mjs'

describe('uniq', () => {
  it('should perform an unsorted uniq when used as an predicate for methods like `map`', () => {
    const array = [
      [2, 1, 2],
      [1, 2, 1],
    ]

    assert.deepEqual(
      [...map(array, (array_) => [...uniq(array_)])],
      [
        [2, 1],
        [1, 2],
      ],
    )
  })
})
