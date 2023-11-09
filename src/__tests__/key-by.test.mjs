import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {keyBy} from '../key-by.mjs'

describe('keyBy', () => {
  const array = [
    {dir: 'left', code: 97},
    {dir: 'right', code: 100},
  ]

  it('should transform keys by `predicate`', () => {
    const expected = {a: {dir: 'left', code: 97}, d: {dir: 'right', code: 100}}

    const actual = keyBy(array, ({code}) => String.fromCodePoint(code))

    assert.deepEqual(actual, expected)
  })
})
