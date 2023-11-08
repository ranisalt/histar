import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {countBy} from '../count-by.mjs'

const array = [6.1, 4.2, 6.3]

describe('countBy', () => {
  it('should transform keys by `predicate`', () => {
    assert.deepEqual(countBy(array, Math.floor), {4: 1, 6: 2})
  })
})
