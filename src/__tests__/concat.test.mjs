import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {concat} from '../concat.mjs'

describe('concat', () => {
  it('should shallow clone `array`', () => {
    const array = [1, 2, 3]

    assert.deepEqual([...concat(array)], array)
  })

  it('should concat arrays', () => {
    const array = [1]

    assert.deepEqual([...concat(array, [3], [[4]])], [1, 3, [4]])
  })

  it('should treat sparse arrays as dense', () => {
    const expected = []

    expected.push(undefined, undefined)

    assert.deepEqual(
      [...concat(Array.from({length: 1}), Array.from({length: 1}))],
      expected,
    )
  })
})
