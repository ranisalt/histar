import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {first, head} from '../head.mjs'
import {map} from '../map.mjs'

describe('head', () => {
  it('should return the first element', () => {
    assert.equal(head([1, 2, 3, 4]), 1)
  })

  it('should return `undefined` when querying empty arrays', () => {
    assert(head([]) === undefined)
  })

  it('should work as an iteratee for methods like `_.map`', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    assert.deepEqual([...map(array, head)], [1, 4, 7])
  })
})

describe('first', () => {
  it('should be aliased to `first`', () => {
    assert.equal(head, first)
  })
})
