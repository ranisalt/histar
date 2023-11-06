import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {flatMapDepth} from '../flat-map-depth.mjs'

const duplicate = (n) => [n, n]

describe('flatMapDepth', () => {
  describe('should support flattening of nested arrays', () => {
    it('with a depth of 1', () => {
      const array = [1, [2, [3, [4]], 5]]
      assert.deepEqual(
        [...flatMapDepth(array, duplicate, 1)],
        array.flatMap((value) => duplicate(value)),
      )
    })

    it('with a depth of 2', () => {
      const array = [1, [2, [3, [4]], 5]]
      assert.deepEqual(
        [...flatMapDepth(array, duplicate, 2)],
        array.map((value) => duplicate(value)).flat(2),
      )
    })
  })

  describe('should work with empty arrays', () => {
    it('with a depth of 1', () => {
      const array = [[], [[]], [[], [[[]]]]]
      assert.deepEqual(
        [...flatMapDepth(array, duplicate, 1)],
        array.flatMap((value) => duplicate(value)),
      )
    })

    it('with a depth of 2', () => {
      const array = [[], [[]], [[], [[[]]]]]
      assert.deepEqual(
        [...flatMapDepth(array, duplicate, 2)],
        array.map((value) => duplicate(value)).flat(2),
      )
    })
  })

  it('should treat a `depth` of < `1` as a shallow clone', () => {
    const array = [1, [2, [3, [4]], 5]]

    assert.deepEqual(
      [...flatMapDepth(array, duplicate, -1)],
      array.map((value) => duplicate(value)),
    )
    assert.deepEqual(
      [...flatMapDepth(array, duplicate, 0)],
      array.map((value) => duplicate(value)),
    )
  })
})
