import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {count} from '../count.mjs'

describe('count', () => {
  it('should count values by identity', () => {
    assert.deepEqual(count('AAAABBBCCDAABBB'), {A: 6, B: 6, C: 2, D: 1})
  })
})
