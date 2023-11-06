import {describe, expect, it} from 'vitest'
import {enumerate} from '../enumerate.mjs'

describe('enumerate', () => {
  it('should combine elements with indices', () => {
    const array1 = [5, 7, 9]

    expect([...enumerate(array1)]).toEqual([
      [0, 5],
      [1, 7],
      [2, 9],
    ])
  })

  it('should accept a `start` parameter and index from that', () => {
    const array1 = [5, 7, 9]

    expect([...enumerate(array1, 5)]).toEqual([
      [5, 5],
      [6, 7],
      [7, 9],
    ])
  })
})
