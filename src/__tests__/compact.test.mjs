import assert from 'node:assert/strict'
import {describe, it} from 'node:test'
import {compact} from '../compact.mjs'

/** Used to provide falsey values to methods. */
// eslint-disable-next-line no-sparse-arrays
const falsey = [, null, undefined, false, 0, Number.NaN, '']

describe('compact', () => {
  it('should filter falsey values', () => {
    const array = ['0', '1', '2']

    assert.deepEqual([...compact([...falsey, ...array])], array)
  })
})
