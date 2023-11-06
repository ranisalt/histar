import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {flattenDepth} from '../flatten-depth.mjs'

describe('flattenDepth', () => {
  it('should support flattening of nested arrays', () => {
    const array = [1, [2, [3, [4]], 5]]

    assert.deepEqual([...flattenDepth(array, 1)], [1, 2, [3, [4]], 5])
    assert.deepEqual([...flattenDepth(array, 2)], [1, 2, 3, [4], 5])
  })

  it('should work with empty arrays', () => {
    const array = [[], [[]], [[], [[[]]]]]

    assert.deepEqual([...flattenDepth(array, 1)], [[], [], [[[]]]])
    assert.deepEqual([...flattenDepth(array, 2)], [[[]]])
  })

  it('should treat a `depth` of < `1` as a shallow clone', () => {
    const array = [1, [2, [3, [4]], 5]]

    assert.deepEqual([...flattenDepth(array, -1)], [1, [2, [3, [4]], 5]])
    assert.deepEqual([...flattenDepth(array, 0)], [1, [2, [3, [4]], 5]])
  })
})
