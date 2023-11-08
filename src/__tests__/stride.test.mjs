import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {stride} from '../stride.mjs'

const array = [0, 1, 2, 3, 4]

describe('stride', () => {
  it('should remove skipped elements', () => {
    assert.deepEqual([...stride(array, 2)], [0, 2, 4])
    assert.deepEqual([...stride(array, 3)], [0, 3])
  })
})
