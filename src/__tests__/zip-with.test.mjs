import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {zipWith} from '../zip-with.mjs'

describe('zipWith', () => {
  it('should zip arrays combining grouped elements with `iteratee`', () => {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]

    assert.deepEqual([...zipWith(array1, array2, (a, b) => a + b)], [5, 7, 9])
  })

  it('should provide correct `iteratee` arguments', () => {
    let args

      // eslint-disable-next-line no-unused-expressions
    ;[
      ...zipWith([1, 2], [3, 4], (...iterArgs) => {
        args ||= iterArgs
      }),
    ]

    assert.deepEqual(args, [1, 3])
  })
})
