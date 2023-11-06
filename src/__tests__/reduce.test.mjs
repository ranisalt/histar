import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {reduce} from '../reduce.mjs'

const array = [1, 2, 3]

describe('reduce', () => {
  it('should use the first element of a collection as the default `accumulator`', () => {
    assert.equal(
      reduce(array, (x) => x),
      1,
    )
  })

  it('should return initial value for empty arrays', () => {
    assert(reduce([], (x) => x) === undefined)
  })

  it('should provide correct `iteratee` arguments when iterating an array', () => {
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

    args = undefined
    reduce(array, (...iterArgs) => {
      args ||= iterArgs
      return iterArgs[0]
    })

    assert.deepEqual(args, [1, 2])
  })
})
