import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {repeat} from '../repeat.mjs'

describe('repeat', () => {
  it('should repeat the given element the specified number of times', () => {
    assert.deepEqual([...repeat('a', 3)], ['a', 'a', 'a'])
  })

  it('should return an empty array for zero `n`', () => {
    assert.deepEqual([...repeat('a', 0)], [])
  })
})
