import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {flatten} from '../flatten.mjs'

describe('flatten', () => {
  it('should treat sparse arrays as dense', () => {
    const array = [[1, 2, 3], Array.from({length: 3})]
    const expected = [1, 2, 3]

    expected.push(undefined, undefined, undefined)

    assert.deepEqual([...flatten(array)], expected)
  })

  it('should work with empty arrays', () => {
    assert.deepEqual([...flatten([[], [[]], [[], [[[]]]]])], [[], [], [[[]]]])
  })

  it('should support flattening of nested arrays', () => {
    assert.deepEqual([...flatten([1, [2, [3, [4]], 5]])], [1, 2, [3, [4]], 5])
  })
})
