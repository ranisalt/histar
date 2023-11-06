import {describe, expect, it} from 'vitest'
import {chunk} from '../chunk.mjs'
import {starMap} from '../star-map.mjs'

describe('starMap', () => {
  it("should map values in 'collection' to a new array", () => {
    expect([...starMap(chunk([1, 2, 3, 4], 2), (a, b) => `${a},${b}`)]).toEqual(
      ['1,2', '3,4'],
    )
  })
})
