import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {includes} from '../includes.mjs'

describe('includes', () => {
  it('should return `true` for matched values', () => {
    assert(includes([1, 2, 3, 4], 3))
    assert(includes('1234', '3'))
  })

  it('should return `false` for unmatched values', () => {
    assert(!includes([1, 2, 3, 4], 5))
    assert(!includes('1234', '5'))
  })
})
