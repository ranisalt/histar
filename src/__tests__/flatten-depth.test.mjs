import {describe, expect, it} from 'vitest'
import {flattenDepth} from '../flatten-depth.mjs'

describe('flattenDepth', () => {
  it('should support flattening of nested arrays', () => {
    const array = [1, [2, [3, [4]], 5]]

    expect([...flattenDepth(array, 1)]).toEqual([1, 2, [3, [4]], 5])
    expect([...flattenDepth(array, 2)]).toEqual([1, 2, 3, [4], 5])
  })

  it('should work with empty arrays', () => {
    const array = [[], [[]], [[], [[[]]]]]

    expect([...flattenDepth(array, 1)]).toEqual([[], [], [[[]]]])
    expect([...flattenDepth(array, 2)]).toEqual([[[]]])
  })

  it('should treat a `depth` of < `1` as a shallow clone', () => {
    const array = [1, [2, [3, [4]], 5]]

    expect([...flattenDepth(array, -1)]).toEqual([1, [2, [3, [4]], 5]])
    expect([...flattenDepth(array, 0)]).toEqual([1, [2, [3, [4]], 5]])
  })
})
