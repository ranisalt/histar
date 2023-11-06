import {describe, expect, it} from 'vitest'
import {last} from '../last.mjs'
import {map} from '../map.mjs'

describe('last', () => {
  it('should return the last element', () => {
    expect(last([1, 2, 3, 4])).toBe(4)
  })

  it('should return `undefined` when querying empty arrays', () => {
    expect(last([])).toBeUndefined()
  })

  it('should work as an iteratee for methods like `map`', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    expect([...map(array, last)]).toEqual([3, 6, 9])
  })
})
