import {describe, expect, it} from 'vitest'
import {flatten} from '../flatten.mjs'

describe('flatten', () => {
  it('should treat sparse arrays as dense', () => {
    const array = [[1, 2, 3], Array.from({length: 3})]
    const expected = [1, 2, 3]

    expected.push(undefined, undefined, undefined)

    expect([...flatten(array)]).toEqual(expected)
  })

  it('should work with empty arrays', () => {
    expect([...flatten([[], [[]], [[], [[[]]]]])]).toEqual([[], [], [[[]]]])
  })

  it('should support flattening of nested arrays', () => {
    expect([...flatten([1, [2, [3, [4]], 5]])]).toEqual([1, 2, [3, [4]], 5])
  })
})
