import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {enumerate} from '../enumerate.mjs'
import {fill} from '../fill.mjs'
import {map} from '../map.mjs'

const array = [1, 2, 3]

describe('fill', () => {
  it('should use a default `start` of `0` and a default `end` of `length`', () => {
    assert.deepEqual([...fill(array, 'a')], ['a', 'a', 'a'])
  })

  it('should work with a positive `start`', () => {
    assert.deepEqual([...fill(array, 'a', 1)], [1, 'a', 'a'])
  })

  it('should work with a `start` >= `length`', () => {
    assert.deepEqual([...fill(array, 'a', 3)], [1, 2, 3])
    assert.deepEqual([...fill(array, 'a', 4)], [1, 2, 3])
    assert.deepEqual([...fill(array, 'a', 2 ** 32)], [1, 2, 3])
    assert.deepEqual([...fill(array, 'a', Number.POSITIVE_INFINITY)], [1, 2, 3])
  })

  it('should work with `start` >= `end`', () => {
    assert.deepEqual([...fill(array, 'a', 2, 2)], [1, 2, 3])
    assert.deepEqual([...fill(array, 'a', 3, 2)], [1, 2, 3])
  })

  it('should work with a positive `end`', () => {
    assert.deepEqual([...fill(array, 'a', 0, 1)], ['a', 2, 3])
  })

  it('should work with a `end` >= `length`', () => {
    assert.deepEqual([...fill(array, 'a', 0, 3)], ['a', 'a', 'a'])
    assert.deepEqual([...fill(array, 'a', 0, 4)], ['a', 'a', 'a'])
    assert.deepEqual([...fill(array, 'a', 0, 2 ** 32)], ['a', 'a', 'a'])
    assert.deepEqual(
      [...fill(array, 'a', 0, Number.POSITIVE_INFINITY)],
      ['a', 'a', 'a'],
    )
  })

  it('should work as an iteratee for methods like `map`', () => {
    const array = [
      [1, 2],
      [3, 4],
    ]

    assert.deepEqual(
      [...map(enumerate(array), ([index, value]) => [...fill(value, index)])],
      [
        [0, 0],
        [1, 1],
      ],
    )
  })
})
