import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {times} from '../times.mjs'

describe('times', () => {
  it('should provide correct `predicate` arguments', () => {
    let args

      // eslint-disable-next-line no-unused-expressions
    ;[
      ...times(1, (...iterArgs) => {
        args ||= iterArgs
      }),
    ]

    assert.deepEqual(args, [0])
  })

  it('should return an array of the results of each `predicate` execution', () => {
    assert.deepEqual([...times(3, (x) => x * 2)], [0, 2, 4])
  })

  it('should return an empty array for zero `n`', () => {
    assert.deepEqual([...times(0, (x) => x)], [])
  })
})
