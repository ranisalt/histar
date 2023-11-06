import {describe, expect, it} from 'vitest'
import {initial} from '../initial.mjs'
import {map} from '../map.mjs'

describe('initial', () => {
  it('should exclude last element', () => {
    expect([...initial([1, 2, 3])]).toEqual([1, 2])
  })

  it('should return an empty when querying empty arrays', () => {
    expect([...initial([])]).toEqual([])
  })

  it('should work as an iteratee for methods like `map`', () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    expect([...map(array, (value) => [...initial(value)])]).toEqual([
      [1, 2],
      [4, 5],
      [7, 8],
    ])
  })
})
