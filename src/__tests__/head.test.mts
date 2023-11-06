import {describe, expect, it} from 'vitest'
import {first, head} from '../head.mjs'
import {map} from '../map.mjs'

describe('head', () => {
  it('should return the first element', () => {
    expect(head([1, 2, 3, 4])).toBe(1)
  })

  it('should return `undefined` when querying empty arrays', () => {
    expect(head<unknown>([])).toBeUndefined()
  })

  it('should work as an iteratee for methods like `_.map`', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    expect([...map(array, head)]).toEqual([1, 4, 7])
  })
})

describe('first', () => {
  it('should be aliased to `first`', () => {
    expect(head).toBe(first)
  })
})
