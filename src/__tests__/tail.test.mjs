import {describe, expect, it} from 'vitest'
import {map} from '../map.mjs'
import {tail} from '../tail.mjs'

describe('tail', () => {
  it('should exclude the first element', () => {
    expect([...tail([1, 2, 3])]).toEqual([2, 3])
  })

  it('should return an empty when querying empty arrays', () => {
    expect([...tail([])]).toEqual([])
  })

  it('should work as an iteratee for methods like `map`', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    expect([...map(array, (value) => [...tail(value)])]).toEqual([
      [2, 3],
      [5, 6],
      [8, 9],
    ])
  })
})
