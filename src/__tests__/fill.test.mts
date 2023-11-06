import {describe, expect, it} from 'vitest'
import {enumerate} from '../enumerate.mjs'
import {fill} from '../fill.mjs'
import {map} from '../map.mjs'

const array = [1, 2, 3]

describe('fill', () => {
  it('should use a default `start` of `0` and a default `end` of `length`', () => {
    expect([...fill(array, 'a')]).toEqual(['a', 'a', 'a'])
  })

  it('should work with a positive `start`', () => {
    expect([...fill(array, 'a', 1)]).toEqual([1, 'a', 'a'])
  })

  it('should work with a `start` >= `length`', () => {
    expect([...fill(array, 'a', 3)]).toEqual([1, 2, 3])
    expect([...fill(array, 'a', 4)]).toEqual([1, 2, 3])
    expect([...fill(array, 'a', 2 ** 32)]).toEqual([1, 2, 3])
    expect([...fill(array, 'a', Number.POSITIVE_INFINITY)]).toEqual([1, 2, 3])
  })

  it('should work with `start` >= `end`', () => {
    expect([...fill(array, 'a', 2, 2)]).toEqual([1, 2, 3])
    expect([...fill(array, 'a', 3, 2)]).toEqual([1, 2, 3])
  })

  it('should work with a positive `end`', () => {
    expect([...fill(array, 'a', 0, 1)]).toEqual(['a', 2, 3])
  })

  it('should work with a `end` >= `length`', () => {
    expect([...fill(array, 'a', 0, 3)]).toEqual(['a', 'a', 'a'])
    expect([...fill(array, 'a', 0, 4)]).toEqual(['a', 'a', 'a'])
    expect([...fill(array, 'a', 0, 2 ** 32)]).toEqual(['a', 'a', 'a'])
    expect([...fill(array, 'a', 0, Number.POSITIVE_INFINITY)]).toEqual([
      'a',
      'a',
      'a',
    ])
  })

  it('should work as an iteratee for methods like `map`', () => {
    const array = [
      [1, 2],
      [3, 4],
    ]

    expect([
      ...map(enumerate(array), ([index, value]) => [...fill(value, index)]),
    ]).toEqual([
      [0, 0],
      [1, 1],
    ])
  })
})
