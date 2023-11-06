import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {cycle} from '../cycle.mjs'
import {range} from '../range.mjs'
import {take} from '../take.mjs'

describe('cycle', () => {
  it('should cycle through the values of an array', () => {
    assert.deepEqual([...take(cycle([1, 2]), 6)], [1, 2, 1, 2, 1, 2])
  })

  it('should cycle through the values of a string', () => {
    assert.deepEqual([...take(cycle('ab'), 6)], ['a', 'b', 'a', 'b', 'a', 'b'])
  })

  it('should cycle through the values of an iterable', () => {
    assert.deepEqual([...take(cycle(range(3)), 6)], [0, 1, 2, 0, 1, 2])
  })
})
