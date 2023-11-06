import {describe, expect, it} from 'vitest'
import {flattenDeep} from '../flatten-deep.mjs'

describe('flattenDeep', () => {
  it('should treat sparse arrays as dense', () => {
    const array = [[1, 2, 3], Array.from({length: 3})]
    const expected: any[] = [1, 2, 3]

    expected.push(undefined, undefined, undefined)

    expect([...flattenDeep(array)]).toEqual(expected)
  })

  it('should work with empty arrays', () => {
    expect([...flattenDeep([[], [[]], [[], [[[]]]]])]).toEqual([])
  })

  it('should support flattening of nested arrays', () => {
    expect([...flattenDeep([1, [2, [3, [4]], 5]])]).toEqual([1, 2, 3, 4, 5])
  })
})
