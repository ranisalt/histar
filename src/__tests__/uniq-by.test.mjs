import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {uniqBy} from '../uniq-by.mjs'
import {take} from '../take.mjs'
import {times} from '../times.mjs'

describe('uniqBy', () => {
  const objects = [{a: 2}, {a: 3}, {a: 1}, {a: 2}, {a: 3}, {a: 1}]

  it('should work with an iteratee', () => {
    assert.deepEqual([...uniqBy(objects, ({a}) => a)], [...take(objects, 3)])
  })

  it('should work with large iterables', () => {
    const largeArray = times(1_000_000, () => [1, 2])

    assert.deepEqual([...uniqBy(largeArray, String)], [[1, 2]])
  })

  it('should provide correct iteratee arguments', () => {
    let args

      // eslint-disable-next-line no-unused-expressions
    ;[
      ...uniqBy(objects, (...iterArgs) => {
        args ||= iterArgs
      }),
    ]

    assert.deepEqual(args, [objects[0]])
  })
})
