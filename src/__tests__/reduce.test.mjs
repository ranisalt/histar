import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {reduce} from '../reduce.mjs'

const array = [1, 2, 3]

describe('reduce', () => {
  it('should return initial value for empty arrays', () => {
    assert(
      reduce(/** @type {number[]} */ ([]), (x) => x, undefined) === undefined,
    )
  })

  it('should provide correct `predicate` arguments when iterating an array', () => {
    let args

    reduce(
      array,
      (...iterArgs) => {
        args ||= iterArgs
        return 0
      },
      0,
    )

    assert.deepEqual(args, [0, 1])
  })
})
