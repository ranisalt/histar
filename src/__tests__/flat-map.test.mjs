import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {flatMap} from '../flat-map.mjs'

const array = [1, 2, 3, 4]

const duplicate = (n) => [n, n]

describe('flatMap', () => {
  it('should map values in `array` to a new flattened array', () => {
    assert.deepEqual(
      [...flatMap(array, duplicate)],
      array.flatMap((value) => duplicate(value)),
    )
  })
})
