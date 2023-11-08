import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {map} from '../map.mjs'
import {tail} from '../tail.mjs'

describe('tail', () => {
  it('should exclude the first element', () => {
    assert.deepEqual([...tail([1, 2, 3])], [2, 3])
  })

  it('should return an empty when querying empty arrays', () => {
    assert.deepEqual([...tail([])], [])
  })

  it('should work as an predicate for methods like `map`', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    assert.deepEqual(
      [...map(array, (value) => [...tail(value)])],
      [
        [2, 3],
        [5, 6],
        [8, 9],
      ],
    )
  })
})
