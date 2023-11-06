import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {initial} from '../initial.mjs'
import {map} from '../map.mjs'

describe('initial', () => {
  it('should exclude last element', () => {
    assert.deepEqual([...initial([1, 2, 3])], [1, 2])
  })

  it('should return an empty when querying empty arrays', () => {
    assert.deepEqual([...initial([])], [])
  })

  it('should work as an iteratee for methods like `map`', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    assert.deepEqual(
      [...map(array, (value) => [...initial(value)])],
      [
        [1, 2],
        [4, 5],
        [7, 8],
      ],
    )
  })
})
