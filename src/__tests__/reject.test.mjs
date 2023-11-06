import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {reject} from '../reject.mjs'

describe('reject', () => {
  it('should return elements the `predicate` returns falsey for', () => {
    assert.deepEqual([...reject([1, 2, 3], (n) => n % 2 === 0)], [1, 3])
  })
})
