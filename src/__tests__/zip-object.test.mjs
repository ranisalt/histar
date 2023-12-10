import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {range} from '../range.mjs'
import {zipObject} from '../zip-object.mjs'

describe('zipObject', () => {
  const object = {barney: 36, fred: 40}

  it('should zip together key/value arrays into an object', () => {
    const actual = zipObject(['barney', 'fred'], [36, 40])
    assert.deepEqual(actual, object)
  })

  it('should ignore extra `values`', () => {
    assert.deepEqual(zipObject(['a'], range(1, 3)), {a: 1})
  })
})
