import {describe, expect, it} from 'vitest'
import {chunk} from '../chunk.mjs'

const array = [0, 1, 2, 3, 4, 5]

describe('chunk', () => {
  it('should return chunked arrays', () => {
    expect([...chunk(array, 3)]).toEqual([
      [0, 1, 2],
      [3, 4, 5],
    ])
  })

  it('should return the last chunk as remaining elements', () => {
    expect([...chunk(array, 4)]).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ])
  })
})
