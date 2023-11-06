import {describe, expect, it} from 'vitest'
import {compact} from '../compact.mjs'

/** Used to provide falsey values to methods. */
// eslint-disable-next-line no-sparse-arrays
const falsey = [, null, undefined, false, 0, Number.NaN, '']

describe('compact', () => {
  it('should filter falsey values', () => {
    const array = ['0', '1', '2']

    expect([...compact([...falsey, ...array])]).toEqual(array)
  })
})
