import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {enumerate} from '../enumerate.mjs'
import {map} from '../map.mjs'
import {nth} from '../nth.mjs'

describe('nth', () => {
  it('should get the nth element of `array`', () => {
    assert.deepEqual(
      [
        ...map(enumerate(['a', 'b', 'c', 'd']), ([index]) =>
          nth(['a', 'b', 'c', 'd'], index),
        ),
      ],
      ['a', 'b', 'c', 'd'],
    )
  })

  it('should return `undefined` for empty arrays', () => {
    assert.equal(nth([], 1), undefined)
  })

  it('should return `undefined` for non-indexes', () => {
    const array = [1, 2]
    const values = [Number.POSITIVE_INFINITY, array.length]
    const expected = [...map(values, () => {})]

    array[-1] = 3

    assert.deepEqual([...map(values, (n) => nth(array, n))], expected)
  })
})
