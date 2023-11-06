import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {flatMapDeep} from '../flat-map-deep.mjs'

const duplicate = (n) => [n, n]

describe('flatMapDeep', () => {
  it('should map values in `array` to a new flattened array', () => {
    const array = [1, 2, 3, 4]

    assert.deepEqual(
      [...flatMapDeep(array, duplicate)],
      array.map((value) => duplicate(value)).flat(Number.POSITIVE_INFINITY),
    )
  })

  it('should work with empty arrays', () => {
    const array = [[], [[]], [[], [[[]]]]]

    assert.deepEqual([...flatMapDeep(array, duplicate)], [])
  })

  it('should support flattening of nested arrays', () => {
    const array = [1, [2, [3, [4]], 5]]

    assert.deepEqual(
      [...flatMapDeep(array, duplicate)],
      array.map((value) => duplicate(value)).flat(Number.POSITIVE_INFINITY),
    )
  })
})
