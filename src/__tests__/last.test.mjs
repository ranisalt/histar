import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {last} from '../last.mjs'
import {map} from '../map.mjs'

describe('last', () => {
  it('should return the last element', () => {
    assert.equal(last([1, 2, 3, 4]), 4)
  })

  it('should return `undefined` when querying empty arrays', () => {
    assert(last([]) === undefined)
  })

  it('should work as an iteratee for methods like `map`', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    assert.deepEqual([...map(array, last)], [3, 6, 9])
  })
})
